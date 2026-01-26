from PIL import Image
import os

def process_logos(input_path, header_output, footer_output):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # --- Step 1: Create Transparent Base (Header Version) ---
    header_data = []
    # White background detection tolerance
    bg_tolerance = 40
    
    for item in datas:
        r, g, b, a = item
        # If pixel is white-ish, make it transparent
        if r > 255 - bg_tolerance and g > 255 - bg_tolerance and b > 255 - bg_tolerance:
            header_data.append((255, 255, 255, 0))
        else:
            header_data.append(item)
            
    header_img = Image.new("RGBA", img.size)
    header_img.putdata(header_data)
    header_img.save(header_output, "PNG")
    print(f"Saved Header Logo (Transparent) -> {header_output}")
    
    # --- Step 2: Create Footer Version (White Text) ---
    # We take the transparent header image and recolor dark pixels to white
    footer_data = []
    
    for item in header_data:
        r, g, b, a = item
        
        # If transparent, keep transparent
        if a == 0:
            footer_data.append(item)
            continue
            
        # If pixel is Dark (Text), change to White
        # Dark Green is roughly (11, 44, 36). Gold is roughly (200+, 170+, ...).
        # We can just check brightness. If sum(rgb) < 300 (roughly), it's dark text.
        if (r + g + b) < 450: 
            footer_data.append((255, 255, 255, 255)) # Turn text White
        else:
            # It's likely the Gold icon, keep it as is
            footer_data.append(item)
            
    footer_img = Image.new("RGBA", img.size)
    footer_img.putdata(footer_data)
    footer_img.save(footer_output, "PNG")
    print(f"Saved Footer Logo (White Text) -> {footer_output}")

# Execute
master_source = r"C:\Users\LENOVO\.gemini\antigravity\brain\844de0fd-58b7-4289-9a46-5eec2d7519e2\logo_master_source_1769425656066.png"
header_out = r"C:\Users\LENOVO\.gemini\antigravity\brain\844de0fd-58b7-4289-9a46-5eec2d7519e2\logo-header-unified.png"
footer_out = r"C:\Users\LENOVO\.gemini\antigravity\brain\844de0fd-58b7-4289-9a46-5eec2d7519e2\logo-footer-unified.png"

if os.path.exists(master_source):
    process_logos(master_source, header_out, footer_out)
else:
    print(f"Error: Master source not found at {master_source}")
