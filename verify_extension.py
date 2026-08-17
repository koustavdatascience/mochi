import json
import re
import subprocess
from pathlib import Path

root = Path(__file__).parent
manifest = json.loads((root / "manifest.json").read_text())
assert manifest["manifest_version"] == 3
assert manifest["content_scripts"][0]["matches"] == ["<all_urls>"]
assert "storage" in manifest["permissions"]
assert manifest["icons"]["128"] == "assets/desktop-cat-icon-128.png"
assert manifest["action"]["default_icon"]["32"] == "assets/desktop-cat-icon-32.png"
assert "host_permissions" not in manifest
resources = manifest["web_accessible_resources"][0]["resources"]
assert "assets/*.gif" in resources
assert "assets/*.png" in resources

required_runtime = [
    "manifest.json",
    "background.js",
    "content.js",
    "cat.css",
    "popup.html",
    "popup.css",
    "popup.js",
    "assets/desktop-cat.png",
    "assets/desktop-cat-icon-16.png",
    "assets/desktop-cat-icon-32.png",
    "assets/desktop-cat-icon-48.png",
    "assets/desktop-cat-icon-128.png",
]
for relative in required_runtime:
    assert (root / relative).exists(), relative

cats = [
    "rolling-bttv", "calico-sit", "gray-pixel", "cute-sleeping",
    "scarf-cat", "blackwhite-roll", "yawning-calico", "round-cute",
    "blue-meme", "mewo", "lying-white", "white-kitty"
]
for stem in cats:
    gif = root / "assets" / f"{stem}.gif"
    still = root / "assets" / f"{stem}.png"
    assert gif.exists(), gif
    assert still.exists(), still
    result = subprocess.run(
        [
            "ffprobe", "-v", "error", "-select_streams", "v:0",
            "-show_entries", "stream=width,height,nb_frames,duration",
            "-of", "default=noprint_wrappers=1", str(gif)
        ], capture_output=True, text=True, check=True
    )
    metadata = result.stdout
    assert re.search(r"width=\d+", metadata)
    assert re.search(r"height=\d+", metadata)
    assert re.search(r"duration=", metadata)
    assert re.search(r"nb_frames=\d+", metadata)

source_files = ["background.js", "content.js", "popup.html", "popup.css", "popup.js", "cat.css"]
source = "\n".join((root / name).read_text(errors="ignore") for name in source_files)
assert "fetch(" not in source
assert "XMLHttpRequest" not in source
assert "desktop-cat:set-skin" in source
assert "desktop-cat:get-shared-state" in source
assert "desktop-cat:sync-state" in source
assert "kkoustavroy" in source
assert "id=\"cat-select\"" in source
assert "requestAnimationFrame" not in source
assert "moveTowardTarget" not in source
assert "document.visibilityState" in source
assert "SKINS" in source
assert "pointerdown" in source
assert "pointermove" in source
assert "translate3d" in source
assert source.count('file: "') == len(cats)
assert source.count('<option value=') == len(cats)

print(f"Desktop Cat 12-cat checks passed: {len(cats)} GIFs and {len(cats)} pause frames.")
