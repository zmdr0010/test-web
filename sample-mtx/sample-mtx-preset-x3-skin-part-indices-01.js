// 0 : dot
// 1 : top edge
// 2 : left edge
// 3 : bottom edge
// 4 : right edge
// 5 : left top
// 6 : left bottom
// 7 : right bottom
// 8 : right top
// 9 : horizontal center line
// 10 : vertical center line
// 11 : top line
// 12 : left line
// 13 : bottom line
// 14 : right line

// 1 : top edge
const mtxPresetX3IndicesTopEdge01 = [
  2, 5, 7, 18, 23, 45, 47, 58, 61, 63, 146, 149, 151,
  173, 175, 186, 189, 191, 338, 343, 362, 365, 367, 378, 381,
  383, 466, 469, 471, 490, 493, 495, 506, 509
]
// 2 : left edge
const mtxPresetX3IndicesLeftEdge01 = [
  1, 3, 7, 9, 11, 15, 23, 25, 27, 31, 47, 51, 55, 57, 59, 61, 63,
  73, 75, 78, 79, 87, 89, 90, 91, 93, 94, 95,
  107, 110, 111, 113, 115, 117, 119, 121, 123, 125, 126, 127, 143,
  147, 153, 155, 157, 159, 167, 169, 171, 177, 179, 181, 183, 185, 187, 201, 203,
  206, 207, 209, 217, 218, 219, 221, 223, 233, 235, 237, 238, 239, 241, 243, 245, 247,
  249, 251, 253, 254, 255, 279, 281, 283, 285, 286, 287, 291, 295,
  299, 303, 307, 309, 311, 313, 315, 317, 318, 319, 331, 333, 334,
  335, 337, 339, 345, 346, 347, 349, 350, 351, 363, 365, 366, 367, 369, 370, 371,
  373, 377, 379, 393, 394, 395, 397, 399, 401, 403, 407, 409, 411, 413, 415, 419, 423,
  425, 427, 429, 431, 433, 435, 437, 439, 443, 445, 447, 457, 459, 461, 463, 465, 467,
  473, 475, 477, 479, 489, 481, 483, 487, 489, 491, 493, 494, 495, 497,
  499, 501, 503, 505, 507, 509, 510
]
// 3 : bottom edge
const mtxPresetX3IndicesBottomEdge01 =
  [
    128, 320, 448, 144, 336, 464, 168, 360, 488, 184, 376, 504, 130, 322, 450, 146, 338,
    466, 170, 362, 490, 186, 378, 506, 133, 325, 453, 149, 341, 469, 173, 365, 493, 189,
    381, 509, 135, 327, 455, 151, 343, 471, 175, 367, 495, 191, 383
  ]

// 4 : right edge (reverse left edge)
const mtxPresetX3IndicesRightEdge01 =
  [
    4, 6, 7, 36, 34, 38, 39, 23, 52, 54, 53, 55, 14, 46, 47, 30, 31, 60, 62, 61, 63, 262, 261,
    263, 292, 290, 294, 293, 291, 295, 276, 278, 277, 279, 308, 306, 310, 309, 307, 311, 268,
    270, 300, 302, 301, 299, 303, 284, 286, 285, 287, 316, 318, 317, 315, 319, 165, 167, 148,
    150, 180, 182, 181, 183, 143, 172, 174, 156, 158, 157, 159, 188, 190, 420, 422, 421, 419,
    423, 404, 436, 434, 438, 437, 439, 428, 430, 429, 427, 431, 412, 414, 413, 415, 444, 446,
    445, 443, 447, 103, 87, 116, 118, 117, 115, 119, 78, 77, 79, 108, 106, 110, 109, 107, 111,
    92, 94, 93, 95, 124, 126, 125, 123, 127, 356, 358, 357, 355, 359, 340, 342, 372, 370, 374,
    373, 371, 375, 364, 366, 365, 363, 367, 348, 346, 350, 349, 380, 382, 228, 226, 230, 229,
    231, 212, 214, 215, 244, 246, 245, 247, 206, 207, 236, 238, 237, 239, 220, 222, 221, 223,
    254, 253, 255, 484, 486, 485, 487, 468, 470, 500, 502, 501, 503, 462, 461, 492, 460, 462,
    461, 463, 492, 494, 493, 491, 495, 476, 478, 477, 479, 508, 510, 509, 507
  ]

// 5 : left top (left edge)
const mtxPresetX3IndicesLeftTop01 = [
  1, 3, 7, 9, 10, 11, 15, 23, 25, 27, 29, 31, 35, 43, 47, 51, 55, 57, 59, 61, 63,
  67, 69, 71, 73, 74, 75, 77, 78, 79, 81, 83, 85, 87, 89, 90, 91, 93, 94, 95, 97, 99,
  105, 107, 109, 110, 111, 113, 115, 117, 119, 121, 123, 125, 126, 127, 141, 143, 145,
  147, 153, 155, 157, 159, 167, 169, 171, 177, 179, 181, 183, 185, 187, 201, 203, 205,
  206, 207, 209, 217, 218, 219, 221, 223, 233, 235, 237, 238, 239, 241, 243, 245, 247,
  249, 251, 253, 254, 255, 271, 279, 281, 283, 285, 286, 287, 291, 293, 295, 297, 298,
  299, 301, 302, 303, 305, 307, 309, 311, 313, 315, 317, 318, 319, 329, 331, 333, 334,
  335, 337, 339, 345, 346, 347, 349, 350, 351, 361, 363, 365, 366, 367, 369, 370, 371,
  373, 377, 379, 393, 394, 395, 397, 399, 401, 403, 407, 409, 411, 413, 415, 419, 423,
  425, 427, 429, 431, 433, 435, 437, 439, 443, 445, 447, 457, 459, 461, 463, 465, 467,
  473, 475, 477, 479, 483, 485, 489, 481, 483, 485, 487, 489, 491, 493, 494, 495, 497,
  499, 501, 503, 505, 507, 509, 510
]
// 6 : left bottom (bottom edge)
const mtxPresetX3IndicesLeftBottom01 = [
  128, 320, 448, 144, 336, 464, 168, 360, 488, 184, 376, 504, 130, 322, 450, 146, 338,
  466, 170, 362, 490, 186, 378, 506, 133, 325, 453, 149, 341, 469, 173, 365, 493, 189,
  381, 509, 135, 327, 455, 151, 343, 471, 175, 367, 495, 191, 383
]
// 7 : right bottom (reverse left bottom)
const mtxPresetX3IndicesRightBottom01 = [
    128, 320, 448, 144, 336, 464, 168, 360, 488, 184, 376, 504, 130, 322, 450, 146,
    338, 466, 170, 362, 490, 186, 378, 506, 133, 325, 453, 149, 341, 469, 173, 365,
    493, 189, 381, 509, 135, 327, 455, 151, 343, 471, 175, 367, 495, 191, 383
]
// 8 : right top (reverse left top)
const mtxPresetX3IndicesRightTop01 = [
    4, 6, 7, 36, 34, 38, 39, 23, 52, 54, 53, 55, 14, 46, 47, 30, 31, 60, 62, 61, 63,
    262, 261, 263, 292, 290, 294, 293, 291, 295, 276, 278, 277, 279, 308, 306, 310,
    309, 307, 311, 268, 270, 300, 302, 301, 299, 303, 284, 286, 285, 287, 316, 318,
    317, 315, 319, 165, 167, 148, 150, 180, 182, 181, 183, 143, 172, 174, 156, 158,
    157, 159, 188, 190, 420, 422, 421, 419, 423, 404, 436, 434, 438, 437, 439, 428,
    430, 429, 427, 431, 412, 414, 413, 415, 444, 446, 445, 443, 447, 103, 87, 116,
    118, 117, 115, 119, 78, 77, 79, 108, 106, 110, 109, 107, 111, 92, 94, 93, 95,
    124, 126, 125, 123, 127, 356, 358, 357, 355, 359, 340, 342, 372, 370, 374, 373,
    371, 375, 364, 366, 365, 363, 367, 348, 346, 350, 349, 380, 382, 228, 226, 230,
    229, 231, 212, 214, 215, 244, 246, 245, 247, 206, 207, 236, 238, 237, 239, 220,
    222, 221, 223, 254, 253, 255, 484, 486, 485, 487, 468, 470, 500, 502, 501, 503,
    462, 461, 492, 460, 462, 461, 463, 492, 494, 493, 491, 495, 476, 478, 477, 479,
    508, 510, 509, 507
]
// 9 : horizontal center line
const mtxPresetX3IndicesHorizontalCenterLine01 = [
  7, 21, 23, 42, 47, 56, 58, 61, 63, 133, 135, 151, 168, 170, 173, 175, 184, 186, 189, 191,
  322, 325, 327, 336, 338, 341, 343, 362, 367, 376, 378, 381, 383, 450, 453, 455, 464, 466,
  469, 471,488, 490, 493, 495, 504, 506, 509
]
// 10 : vertical center line
const mtxPresetX3IndicesVerticalCenterLine01 = [
  130, 133, 135, 144, 146, 149, 151, 170, 173, 175, 186, 189, 191, 322, 325, 327, 338, 341,
  343, 360, 362, 365, 367, 378, 381, 383, 466, 469, 471, 490, 493, 495, 506, 509
]
// 11 : top line
const mtxPresetX3IndicesTopLine01 = [
  7, 21, 23, 42, 45, 47, 58, 61, 63, 151, 170, 173, 175, 186, 189, 191, 341, 343, 362, 365,
  367, 383, 493, 495, 506, 509
]
// 12 : left line
const mtxPresetX3IndicesLeftLine01 = [
  65, 67, 69, 73, 75, 77, 78, 79, 81, 83, 85, 87, 89, 91, 93, 94, 95, 105, 107, 109, 111, 113,
  121, 123, 125, 127, 201, 203, 205, 206, 207, 209, 211, 213, 215, 217, 219, 221, 223, 227,
  231, 233, 235, 237, 239, 241, 243, 245, 247, 249, 251, 253, 255, 321, 325, 327, 329, 330,
  331, 333, 343, 345, 347, 349, 350, 351, 355, 357, 359, 361, 363, 365, 366, 367, 369, 371,
  373, 375, 377, 379, 381, 383, 395, 397, 399, 409, 411, 413, 415, 425, 427, 429, 431, 441,
  443, 445, 447, 455, 457, 458, 459, 461, 462, 463, 465, 467, 469, 471, 473, 474, 475, 477,
  478, 479, 483, 484, 485, 486, 487, 489, 490, 491, 492, 493, 494, 495, 497, 499, 501, 503,
  505, 507, 509, 510
]
// 13 : bottom line (reverse top line)
const mtxPresetX3IndicesBottomLine01 = [
    448, 336, 464, 168, 360, 488, 184, 376, 504, 466, 170, 362, 490, 186, 378, 506, 341,
    469, 173, 365, 493, 509, 367, 495, 191, 383
]
// 14 : right line (reverse left line)
const mtxPresetX3IndicesRightLine01 = [
    260, 262, 261, 292, 294, 293, 291, 295, 276, 278, 277, 279, 308, 310, 309, 307, 311,
    300, 302, 301, 303, 284, 316, 318, 317, 319, 420, 422, 421, 419, 423, 404, 406, 405,
    407, 436, 438, 437, 439, 398, 399, 428, 430, 429, 431, 412, 414, 413, 415, 444, 446,
    445, 447, 324, 325, 327, 356, 354, 358, 357, 343, 372, 374, 373, 371, 375, 334, 333,
    335, 364, 366, 365, 363, 367, 348, 350, 349, 351, 380, 382, 381, 383, 230, 229, 231,
    244, 246, 245, 247, 236, 238, 237, 239, 252, 254, 253, 255, 455, 484, 482, 486, 485,
    483, 487, 468, 470, 469, 471, 500, 498, 502, 501, 499, 503, 462, 457, 461, 459, 463,
    492, 490, 494, 489, 493, 491, 495, 476, 478, 477, 479, 508, 510, 509, 507
]

// select
const mtxPresetX3IndicesSelect = [
  95, 311, 473, 500,
  63, 219, 504, 438,
  7, 56, 448, 73, 146, 292,
  511, 495, 186, 170, 341,
  255, 507, 510, 447,
  383, 479, 509, 503,
  127, 319, 505, 508, 475, 502, 223, 439,
  457, 484, 79, 295,
  151, 466, 121, 316,
  23, 464, 89, 308,
  201, 420, 480, 456, 294, 75, 15, 39,
  191, 251, 446, 506,
  471, 381
]