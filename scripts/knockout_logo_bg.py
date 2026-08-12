from PIL import Image
from pathlib import Path

brand = Path(r"d:\Work\TAC_Main_Website_2026_27\public\images\brand")


def knock_out_black(src: Path, dst: Path, threshold: int = 30) -> None:
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r <= threshold and g <= threshold and b <= threshold:
                pixels[x, y] = (0, 0, 0, 0)
    img.save(dst, "PNG")
    print(f"Wrote {dst.name} ({w}x{h})")


for name in ("logo.png", "logo-white.png"):
    src = brand / name
    bak = brand / f"{src.stem}.opaque-bak.png"
    if not bak.exists():
        bak.write_bytes(src.read_bytes())
        print(f"Backed up {bak.name}")

knock_out_black(brand / "logo.opaque-bak.png", brand / "logo.png")
knock_out_black(brand / "logo-white.opaque-bak.png", brand / "logo-white.png")
knock_out_black(brand / "logo-white.opaque-bak.png", brand / "logo-splash.png")
print("done")
