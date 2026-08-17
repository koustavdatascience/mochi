import json
import re
import subprocess
from pathlib import Path

root = Path(__file__).parent
manifest = json.loads((root / "manifest.json").read_text())
assert manifest["manifest_version"] == 3
assert manifest["name"] == "Mochi"
assert manifest["action"]["default_title"] == "Mochi"
assert manifest["content_scripts"][0]["matches"] == ["<all_urls>"]
assert "storage" in manifest["permissions"]
assert "scripting" in manifest["permissions"]
assert manifest["icons"]["128"] == "assets/mochi-icon-128.png"
assert manifest["action"]["default_icon"]["32"] == "assets/mochi-icon-32.png"
assert manifest["host_permissions"] == ["<all_urls>"]
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
    "assets/mochi-logo.png",
    "assets/mochi-icon-16.png",
    "assets/mochi-icon-32.png",
    "assets/mochi-icon-48.png",
    "assets/mochi-icon-128.png",
]
for relative in required_runtime:
    assert (root / relative).exists(), relative

cats = [
    "bad-boy", "black-cat", "bttv-rolling-cat", "little-cream-cat",
    "green-frog-cat", "tiny-cute-cat", "cat-in-a-scarf", "black-cat-roll",
    "spinning-blue-cat", "yawning-white-cat", "gray-pixel-cat", "blushing-cute-cat",
    "dance-break", "blue-meme-cat", "heart-love-cat", "mewo-omori",
    "white-sleeping-cat", "white-kitty", "bleh-cat", "paper-hat"
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
assert "desktop-cat:set-position" in source
assert "chrome.scripting" in source
assert "currentTabInjected" in source
assert "chrome.tabs.onActivated" in source
assert "chrome.tabs.onUpdated" in source
assert "position" in source
assert "rehydrateOpenTabs" in source
assert "__mochiContentInitialized" in source
assert "github.com/koustavdatascience" in source
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

print(f"Mochi {len(cats)}-cat checks passed: {len(cats)} GIFs and {len(cats)} pause frames.")
