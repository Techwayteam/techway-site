"""One-off, deterministic quality uplift for legacy low-bitrate hero cutouts.
Source asset identity and transparency are preserved. No generative replacement.
"""
from pathlib import Path
from PIL import Image, ImageFilter

root = Path(__file__).resolve().parents[1] / "public" / "illustrations"
for stem in ("techway-empreendedora", "techway-assistente"):
    original = root / (stem + ".avif")
    dest = root / (stem + "-hq.webp")
    with Image.open(original) as src:
        rgba = src.convert("RGBA")
        # Lanczos avoids blocky interpolation on retina/HiDPI screens.
        canvas = rgba.resize((rgba.width * 2, rgba.height * 2), Image.Resampling.LANCZOS)
        # Small contrast restoration without introducing halos into transparency.
        alpha = canvas.getchannel("A")
        rgb = canvas.convert("RGB").filter(
            ImageFilter.UnsharpMask(radius=1.0, percent=105, threshold=2)
        )
        rgb.putalpha(alpha)
        rgb.save(dest, format="WEBP", quality=94, method=6)
        if dest.stat().st_size < 12000:
            raise RuntimeError(f"{dest} is suspiciously small")
        print(f"{stem}: {src.size} → {rgb.size}; {original.stat().st_size} → {dest.stat().st_size} bytes")
