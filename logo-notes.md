# Logo Proportions
- FUJIFILM: 3840x2160 (landscape, text-only, wide)
- WAMA: 5408x1758 (very wide landscape, logo+text)
- Nihon Kohden: 2400x2400 (square, but logo content is centered horizontally, lots of whitespace)

Problem: Nihon Kohden is square (1:1) with lots of whitespace, so max-h-14 makes it tiny.
FUJIFILM and WAMA are wide landscapes, so they fill the width well.

Solution: Use individual sizing per logo, or crop Nihon Kohden to remove whitespace, or adjust CSS to handle different aspect ratios.
