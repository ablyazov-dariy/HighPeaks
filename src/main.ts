import './style.css'

function setRandomBackgroundColors() {
  const bgColors = [
    "#00FFFF", // Aqua
    "#7FFFD4", // Aquamarine
    "#FFE4C4", // Bisque
    "#FFEBCD", // BlanchedAlmond
    "#0000FF", // Blue
    "#8A2BE2", // BlueViolet
    "#A52A2A", // Brown
    "#DEB887", // BurlyWood
    "#5F9EA0", // CadetBlue
    "#7FFF00", // Chartreuse
    "#D2691E", // Chocolate
    "#FF7F50", // Coral
    "#6495ED", // CornflowerBlue
    "#DC143C", // Crimson
    "#00FFFF", // Cyan
    "#00008B", // DarkBlue
    "#008B8B", // DarkCyan
    "#B8860B", // DarkGoldenRod
    "#006400", // DarkGreen
    "#BDB76B", // DarkKhaki
    "#8B008B", // DarkMagenta
    "#556B2F", // DarkOliveGreen
    "#FF8C00", // DarkOrange
    "#9932CC", // DarkOrchid
    "#8B0000", // DarkRed
    "#E9967A", // DarkSalmon
    "#8FBC8F", // DarkSeaGreen
    "#483D8B", // DarkSlateBlue
    "#00CED1", // DarkTurquoise
    "#9400D3", // DarkViolet
    "#FF1493", // DeepPink
    "#00BFFF", // DeepSkyBlue
    "#1E90FF", // DodgerBlue
    "#B22222", // FireBrick
    "#228B22", // ForestGreen
    "#FF00FF", // Fuchsia
    "#FFD700", // Gold
    "#DAA520", // GoldenRod
    "#008000", // Green
    "#ADFF2F", // GreenYellow
    "#F0FFF0", // HoneyDew
    "#FF69B4", // HotPink
    "#CD5C5C", // IndianRed
    "#4B0082", // Indigo
    "#FFFFF0", // Ivory
    "#F0E68C", // Khaki
    "#7CFC00", // LawnGreen
    "#FFFACD", // LemonChiffon
    "#ADD8E6", // LightBlue
    "#F08080", // LightCoral
    "#E0FFFF", // LightCyan
    "#FAFAD2", // LightGoldenRodYellow
    "#90EE90", // LightGreen
    "#FFB6C1", // LightPink
    "#FFA07A", // LightSalmon
    "#20B2AA", // LightSeaGreen
    "#87CEFA", // LightSkyBlue
    "#B0C4DE", // LightSteelBlue
    "#00FF00", // Lime
    "#32CD32", // LimeGreen
    "#FF00FF", // Magenta
    "#800000", // Maroon
    "#66CDAA", // MediumAquaMarine
    "#0000CD", // MediumBlue
    "#BA55D3", // MediumOrchid
    "#9370DB", // MediumPurple
    "#3CB371", // MediumSeaGreen
    "#7B68EE", // MediumSlateBlue
    "#00FA9A", // MediumSpringGreen
    "#48D1CC", // MediumTurquoise
    "#C71585", // MediumVioletRed
    "#191970", // MidnightBlue
    "#FFE4E1", // MistyRose
    "#FFE4B5", // Moccasin
    "#FFDEAD", // NavajoWhite
    "#000080", // Navy
    "#6B8E23", // OliveDrab
    "#FFA500", // Orange
    "#FF4500", // OrangeRed
    "#DA70D6", // Orchid
    "#EEE8AA", // PaleGoldenRod
    "#98FB98", // PaleGreen
    "#AFEEEE", // PaleTurquoise
    "#DB7093", // PaleVioletRed
    "#FFEFD5", // PapayaWhip
    "#FFDAB9", // PeachPuff
    "#CD853F", // Peru
    "#FFC0CB", // Pink
    "#DDA0DD", // Plum
    "#B0E0E6", // PowderBlue
    "#800080", // Purple
    "#FF0000", // Red
    "#BC8F8F", // RosyBrown
    "#4169E1", // RoyalBlue
    "#8B4513", // SaddleBrown
    "#FA8072", // Salmon
    "#F4A460", // SandyBrown
    "#2E8B57", // SeaGreen
    "#A0522D", // Sienna
    "#87CEEB", // SkyBlue
    "#6A5ACD", // SlateBlue
    "#00FF7F", // SpringGreen
    "#4682B4", // SteelBlue
    "#D2B48C", // Tan
    "#008080", // Teal
    "#D8BFD8", // Thistle
    "#FF6347", // Tomato
    "#40E0D0", // Turquoise
    "#EE82EE", // Violet
    "#9ACD32", // YellowGreen
  ];

  // Get all elements with the class "content-container"
  const contentContainers = document.querySelectorAll(".content-container");

  // Loop through each content container
  contentContainers.forEach((container: any) => {
    // Generate a random index within the range of the bgColors array
    const randomIndex = Math.floor(Math.random() * bgColors.length);

    // Set the background color of the container
    container.style!.backgroundColor = bgColors[randomIndex];
  });
}

// Call the function to set random background colors
// setRandomBackgroundColors();