import random
from PIL import Image, ImageDraw, ImageFilter

NUMICONS = 5000

ICON_PATH = "birds.png"
PATH = "birds"


def generate_icon(filename):
    """
    Generates a new icon 
    """
    MODE = 'RGBA'
    # The background color will just be random.
    BACKGROUND_COLOR = (random.randrange(0, 255), random.randrange(0, 255), random.randrange(0, 255), 255)
    # Dark grey outline
    OUTLINE_COLOR = (50,50,50,255)
    TRANSPARENT = (0,0,0,0)
    # Define a bunch of constants we will need
    ICON_OFFSET = (-4,-9)
    GENERATED_ICON_SIZE = (20, 20)
    TRIANGLE_COORDS = [(10, 30), (15, 45), (20, 30)]
    RECTANGLE_COORDS = [(0,0), (20, 20)]


    # Initialize the canvas
    canvas = Image.new(MODE, GENERATED_ICON_SIZE, TRANSPARENT)

    # Draw the background
    draw = ImageDraw.Draw(canvas)
    draw.rectangle(RECTANGLE_COORDS, fill=BACKGROUND_COLOR)
    #draw.polygon(TRIANGLE_COORDS, fill=BACKGROUND_COLOR)

    # Draw the outline
    outline = canvas.filter(ImageFilter.FIND_EDGES)

    # Paste the icon into a canvas
    icon_raw = Image.open(ICON_PATH)
    icon_img = Image.new(MODE, GENERATED_ICON_SIZE)
    icon_img.paste(icon_raw, ICON_OFFSET)

    # And paste the canvas onto the background
    img = Image.alpha_composite(canvas, icon_img)

    # Walk through the pixels like a 2d array,
    # and change all that aren't transparent
    # to OUTLINE_COLOR.
    pixels = outline.load()
    for i in range(outline.size[0]):
        for j in range(outline.size[1]):
            if pixels[i,j] != TRANSPARENT:
                pixels[i,j] = OUTLINE_COLOR

    # Now paste the outline onto the image
    img = Image.alpha_composite(img, outline)
    # And save it
    img.save(PATH + filename)
    #img.show()

# Run the traaaap
for i in range(0, NUMICONS):
    generate_icon("/icon" + str(i + 1) + ".png")

