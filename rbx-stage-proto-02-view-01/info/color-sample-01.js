const colorSampleList01 = [
  ['rgb(249, 245, 246)','rgb(248, 232, 238)','rgb(253, 206, 223)','rgb(242, 190, 209)'],
  ['rgb(39, 55, 77)','rgb(82, 109, 130)','rgb(157, 178, 191)','rgb(221, 230, 237)'],
  ['rgb(245, 247, 248)','rgb(244, 206, 20)','rgb(73, 94, 87)','rgb(69, 71, 75)'],
  ['rgb(150, 182, 197)','rgb(173, 196, 206)','rgb(238, 224, 201)','rgb(241, 240, 232)'],
  ['rgb(196, 223, 223)','rgb(210, 233, 233)','rgb(227, 244, 244)','rgb(248, 246, 244)'],
  ['rgb(155, 171, 184)','rgb(238, 227, 203)','rgb(215, 192, 174)','rgb(150, 126, 118)'],
  ['rgb(250, 241, 228)','rgb(206, 222, 189)','rgb(158, 179, 132)','rgb(67, 83, 52)'],
  ['rgb(255, 238, 204)','rgb(255, 221, 204)','rgb(255, 204, 204)','rgb(254, 187, 204)'],
  ['rgb(241, 246, 249)','rgb(57, 72, 103)','rgb(33, 42, 62)','rgb(155, 164, 181)'],
  ['rgb(160, 196, 157)','rgb(196, 215, 178)','rgb(225, 236, 200)','rgb(247, 255, 229)'],
  ['rgb(209, 77, 114)','rgb(255, 171, 171)','rgb(252, 200, 209)','rgb(254, 242, 244)'],
  ['rgb(234, 198, 150)','rgb(200, 174, 125)','rgb(118, 88, 39)','rgb(101, 69, 31)'],
  ['rgb(130, 148, 196)','rgb(172, 177, 214)','rgb(219, 223, 234)','rgb(255, 234, 210)'],
  ['rgb(246, 244, 235)','rgb(145, 200, 228)','rgb(116, 155, 194)','rgb(70, 130, 169)'],
  ['rgb(136, 74, 57)','rgb(195, 129, 84)','rgb(255, 194, 111)','rgb(249, 224, 187)'],
  ['rgb(4, 13, 18)','rgb(24, 61, 61)','rgb(92, 131, 116)','rgb(147, 177, 166)'],
  ['rgb(97, 130, 100)','rgb(121, 172, 120)','rgb(176, 217, 177)','rgb(208, 231, 210)'],
  ['rgb(246, 241, 241)','rgb(175, 211, 226)','rgb(25, 167, 206)','rgb(20, 108, 148)'],
  ['rgb(243, 238, 234)','rgb(235, 227, 213)','rgb(176, 166, 149)','rgb(119, 107, 93)'],
  ['rgb(42, 47, 79)','rgb(145, 127, 179)','rgb(229, 190, 236)','rgb(253, 226, 243)'],
  ['rgb(154, 59, 59)','rgb(192, 130, 97)','rgb(226, 199, 153)','rgb(242, 236, 190)'],
  ['rgb(255, 242, 216)','rgb(234, 215, 187)','rgb(188, 163, 127)','rgb(17, 57, 70)'],
  ['rgb(245, 239, 231)','rgb(216, 196, 182)','rgb(79, 112, 156)','rgb(33, 53, 85)'],
  ['rgb(248, 240, 229)','rgb(234, 219, 200)','rgb(218, 192, 163)','rgb(16, 44, 87)'],
  ['rgb(153, 169, 143)','rgb(193, 208, 181)','rgb(214, 232, 219)','rgb(255, 248, 222)'],
  ['rgb(236, 227, 206)','rgb(115, 144, 114)','rgb(79, 111, 82)','rgb(58, 77, 57)'],
  ['rgb(12, 19, 79)','rgb(29, 38, 125)','rgb(92, 70, 156)','rgb(212, 173, 252)'],
  ['rgb(95, 111, 82)','rgb(169, 179, 136)','rgb(254, 250, 224)','rgb(185, 148, 112)'],
  ['rgb(250, 243, 240)','rgb(212, 226, 212)','rgb(255, 202, 204)','rgb(219, 196, 240)'],
  ['rgb(100, 56, 67)','rgb(153, 98, 122)','rgb(200, 142, 167)','rgb(231, 203, 203)'],
  ['rgb(161, 204, 209)','rgb(244, 242, 222)','rgb(233, 179, 132)','rgb(124, 157, 150)'],
  ['rgb(255, 243, 218)','rgb(223, 204, 251)','rgb(208, 191, 255)','rgb(190, 173, 250)'],
  ['rgb(22, 72, 99)','rgb(66, 125, 157)','rgb(155, 190, 200)','rgb(221, 242, 253)'],
  ['rgb(255, 234, 221)','rgb(252, 174, 174)','rgb(255, 137, 137)','rgb(255, 102, 102)'],
  ['rgb(148, 166, 132)','rgb(174, 195, 174)','rgb(228, 228, 208)','rgb(255, 238, 244)'],
  ['rgb(246, 255, 222)','rgb(227, 242, 193)','rgb(201, 219, 178)','rgb(170, 200, 167)'],
  ['rgb(255, 187, 92)','rgb(255, 155, 80)','rgb(226, 94, 62)','rgb(198, 61, 47)'],
  ['rgb(255, 198, 172)','rgb(255, 246, 220)','rgb(196, 193, 164)','rgb(158, 159, 165)'],
  ['rgb(245, 238, 230)','rgb(255, 248, 227)','rgb(243, 215, 202)','rgb(230, 164, 180)'],
  ['rgb(58, 166, 185)','rgb(255, 208, 208)','rgb(255, 158, 170)','rgb(193, 236, 228)'],
  ['rgb(251, 161, 183)','rgb(255, 209, 218)','rgb(255, 240, 245)','rgb(255, 219, 170)'],
  ['rgb(74, 85, 162)','rgb(120, 149, 203)','rgb(160, 191, 224)','rgb(197, 223, 248)'],
  ['rgb(210, 224, 251)','rgb(249, 243, 204)','rgb(215, 229, 202)','rgb(142, 172, 205)'],
  ['rgb(248, 240, 229)','rgb(234, 219, 200)','rgb(218, 192, 163)','rgb(15, 44, 89)'],
  ['rgb(245, 245, 245)','rgb(242, 234, 211)','rgb(223, 215, 191)','rgb(63, 35, 5)'],
  ['rgb(249, 251, 231)','rgb(240, 237, 212)','rgb(236, 205, 180)','rgb(254, 161, 161)'],
  ['rgb(255, 197, 197)','rgb(255, 235, 216)','rgb(199, 220, 167)','rgb(137, 185, 173)'],
  ['rgb(53, 47, 68)','rgb(92, 84, 112)','rgb(185, 180, 199)','rgb(250, 240, 230)'],
  ['rgb(185, 237, 221)','rgb(135, 203, 185)','rgb(86, 157, 170)','rgb(87, 125, 134)'],
  ['rgb(183, 153, 255)','rgb(172, 188, 255)','rgb(174, 226, 255)','rgb(230, 255, 253)'],
  ['rgb(168, 223, 142)','rgb(243, 253, 232)','rgb(255, 229, 229)','rgb(255, 191, 191)'],
  ['rgb(51, 29, 44)','rgb(63, 46, 62)','rgb(167, 130, 149)','rgb(239, 225, 209)'],
  ['rgb(253, 247, 228)','rgb(250, 238, 209)','rgb(222, 208, 182)','rgb(187, 171, 140)'],
  ['rgb(5, 59, 80)','rgb(23, 107, 135)','rgb(100, 204, 197)','rgb(238, 238, 238)'],
  ['rgb(10, 77, 104)','rgb(8, 131, 149)','rgb(5, 191, 219)','rgb(0, 255, 202)'],
  ['rgb(251, 240, 178)','rgb(255, 199, 234)','rgb(216, 180, 248)','rgb(202, 237, 255)'],
  ['rgb(194, 222, 220)','rgb(236, 229, 199)','rgb(205, 194, 174)','rgb(17, 106, 123)'],
  ['rgb(220, 242, 241)','rgb(127, 199, 217)','rgb(54, 84, 134)','rgb(15, 16, 53)'],
  ['rgb(39, 40, 41)','rgb(97, 103, 122)','rgb(216, 217, 218)','rgb(255, 246, 224)'],
  ['rgb(249, 123, 34)','rgb(254, 232, 176)','rgb(156, 167, 119)','rgb(124, 144, 112)'],
  ['rgb(45, 67, 86)','rgb(67, 91, 102)','rgb(167, 111, 111)','rgb(234, 178, 160)'],
  ['rgb(67, 118, 108)','rgb(248, 250, 229)','rgb(177, 148, 112)','rgb(118, 69, 59)'],
  ['rgb(191, 204, 181)','rgb(124, 150, 171)','rgb(183, 183, 183)','rgb(237, 198, 177)'],
  ['rgb(241, 234, 255)','rgb(229, 212, 255)','rgb(220, 191, 255)','rgb(208, 162, 247)'],
  ['rgb(7, 25, 82)','rgb(11, 102, 106)','rgb(53, 162, 159)','rgb(151, 254, 237)'],
  ['rgb(0, 28, 48)','rgb(23, 107, 135)','rgb(100, 204, 197)','rgb(218, 255, 251)'],
  ['rgb(255, 228, 214)','rgb(250, 203, 234)','rgb(217, 136, 185)','rgb(176, 87, 141)'],
  ['rgb(33, 156, 144)','rgb(233, 184, 36)','rgb(238, 147, 34)','rgb(216, 63, 49)'],
  ['rgb(242, 227, 219)','rgb(65, 100, 74)','rgb(38, 58, 41)','rgb(232, 106, 51)'],
  ['rgb(4, 54, 74)','rgb(23, 107, 135)','rgb(100, 204, 197)','rgb(218, 255, 251)'],
  ['rgb(146, 199, 207)','rgb(170, 215, 217)','rgb(251, 249, 241)','rgb(229, 225, 218)'],
  ['rgb(96, 108, 93)','rgb(255, 244, 244)','rgb(247, 230, 196)','rgb(241, 195, 118)'],
  ['rgb(225, 240, 218)','rgb(212, 231, 197)','rgb(191, 216, 175)','rgb(153, 188, 133)'],
  ['rgb(117, 106, 182)','rgb(172, 135, 197)','rgb(224, 174, 208)','rgb(255, 229, 229)'],
  ['rgb(34, 166, 153)','rgb(242, 190, 34)','rgb(242, 151, 39)','rgb(242, 76, 61)'],
  ['rgb(248, 117, 170)','rgb(255, 223, 223)','rgb(255, 246, 246)','rgb(174, 222, 252)'],
  ['rgb(60, 72, 107)','rgb(240, 240, 240)','rgb(249, 217, 73)','rgb(244, 80, 80)'],
  ['rgb(108, 52, 40)','rgb(186, 112, 79)','rgb(223, 168, 120)','rgb(206, 230, 243)'],
  ['rgb(255, 155, 155)','rgb(255, 214, 165)','rgb(255, 254, 196)','rgb(203, 255, 169)'],
  ['rgb(239, 149, 149)','rgb(239, 180, 149)','rgb(239, 213, 149)','rgb(235, 239, 149)'],
  ['rgb(136, 171, 142)','rgb(175, 200, 173)','rgb(238, 231, 218)','rgb(242, 241, 235)'],
  ['rgb(18, 55, 42)','rgb(67, 104, 80)','rgb(173, 188, 159)','rgb(251, 250, 218)'],
  ['rgb(22, 26, 48)','rgb(49, 48, 77)','rgb(182, 187, 196)','rgb(240, 236, 229)'],
  ['rgb(2, 84, 100)','rgb(229, 124, 35)','rgb(232, 170, 66)','rgb(248, 241, 241)'],
  ['rgb(0, 66, 37)','rgb(245, 245, 220)','rgb(255, 176, 0)','rgb(255, 207, 157)'],
  ['rgb(96, 114, 116)','rgb(250, 238, 209)','rgb(222, 208, 182)','rgb(178, 165, 155)'],
  ['rgb(255, 184, 76)','rgb(242, 102, 171)','rgb(164, 89, 209)','rgb(44, 211, 225)'],
  ['rgb(238, 226, 222)','rgb(234, 144, 108)','rgb(179, 19, 18)','rgb(43, 42, 76)'],
  ['rgb(255, 144, 188)','rgb(255, 192, 217)','rgb(249, 249, 224)','rgb(138, 205, 215)'],
  ['rgb(255, 204, 112)','rgb(255, 250, 221)','rgb(142, 205, 221)','rgb(34, 102, 141)'],
  ['rgb(190, 173, 250)','rgb(208, 191, 255)','rgb(223, 204, 251)','rgb(255, 248, 201)'],
  ['rgb(144, 12, 63)','rgb(199, 0, 57)','rgb(249, 76, 16)','rgb(248, 222, 34)'],
  ['rgb(255, 245, 224)','rgb(255, 105, 105)','rgb(199, 0, 57)','rgb(20, 30, 70)'],
  ['rgb(255, 120, 196)','rgb(225, 174, 255)','rgb(255, 189, 247)','rgb(255, 236, 236)'],
  ['rgb(255, 109, 96)','rgb(247, 208, 96)','rgb(243, 233, 159)','rgb(152, 216, 170)'],
  ['rgb(9, 38, 53)','rgb(27, 66, 66)','rgb(92, 131, 116)','rgb(158, 200, 185)'],
  ['rgb(69, 25, 82)','rgb(102, 37, 73)','rgb(174, 68, 90)','rgb(243, 159, 90)'],
  ['rgb(24, 111, 101)','rgb(181, 203, 153)','rgb(252, 224, 155)','rgb(178, 83, 62)'],
  ['rgb(19, 32, 67)','rgb(31, 65, 114)','rgb(241, 180, 187)','rgb(253, 240, 240)'],
  ['rgb(255, 128, 128)','rgb(255, 207, 150)','rgb(246, 253, 195)','rgb(205, 250, 213)'],
  ['rgb(0, 169, 255)','rgb(137, 207, 243)','rgb(160, 233, 255)','rgb(205, 245, 253)'],
  ['rgb(166, 208, 221)','rgb(255, 105, 105)','rgb(255, 211, 176)','rgb(255, 249, 222)'],
  ['rgb(134, 167, 137)','rgb(178, 200, 186)','rgb(210, 227, 200)','rgb(235, 243, 232)'],
  ['rgb(0, 121, 255)','rgb(0, 223, 162)','rgb(246, 250, 112)','rgb(255, 0, 96)'],
  ['rgb(1, 106, 112)','rgb(255, 255, 221)','rgb(210, 222, 50)','rgb(162, 197, 121)'],
  ['rgb(34, 9, 44)','rgb(135, 35, 65)','rgb(190, 49, 68)','rgb(240, 89, 65)'],
  ['rgb(249, 239, 219)','rgb(235, 217, 180)','rgb(157, 188, 152)','rgb(99, 136, 137)'],
  ['rgb(181, 192, 208)','rgb(204, 211, 202)','rgb(245, 232, 221)','rgb(238, 211, 217)'],
  ['rgb(225, 152, 152)','rgb(162, 103, 138)','rgb(77, 60, 119)','rgb(63, 29, 56)'],
  ['rgb(255, 248, 214)','rgb(247, 225, 174)','rgb(164, 208, 164)','rgb(97, 122, 85)'],
  ['rgb(14, 41, 84)','rgb(31, 110, 140)','rgb(46, 138, 153)','rgb(132, 167, 161)'],
  ['rgb(254, 217, 237)','rgb(231, 188, 222)','rgb(187, 156, 192)','rgb(103, 114, 157)'],
  ['rgb(238, 245, 255)','rgb(180, 212, 255)','rgb(134, 182, 246)','rgb(23, 107, 135)'],
  ['rgb(149, 35, 35)','rgb(167, 49, 33)','rgb(218, 212, 181)','rgb(242, 232, 198)'],
  ['rgb(79, 111, 82)','rgb(115, 144, 114)','rgb(134, 167, 137)','rgb(210, 227, 200)'],
  ['rgb(17, 0, 158)','rgb(73, 66, 228)','rgb(134, 150, 254)','rgb(196, 176, 255)'],
  ['rgb(245, 240, 187)','rgb(219, 223, 170)','rgb(179, 200, 144)','rgb(115, 169, 173)'],
  ['rgb(54, 48, 98)','rgb(67, 85, 133)','rgb(129, 143, 180)','rgb(245, 232, 199)'],
  ['rgb(29, 91, 121)','rgb(70, 139, 151)','rgb(239, 98, 98)','rgb(243, 170, 96)'],
  ['rgb(121, 224, 238)','rgb(152, 238, 204)','rgb(208, 245, 190)','rgb(251, 255, 220)'],
  ['rgb(253, 229, 236)','rgb(252, 186, 173)','rgb(228, 133, 134)','rgb(145, 109, 179)'],
  ['rgb(125, 10, 10)','rgb(191, 49, 49)','rgb(234, 209, 150)','rgb(243, 237, 200)'],
  ['rgb(200, 228, 178)','rgb(158, 210, 190)','rgb(126, 170, 146)','rgb(255, 217, 183)'],
  ['rgb(182, 255, 250)','rgb(152, 228, 255)','rgb(128, 179, 255)','rgb(104, 126, 255)'],
  ['rgb(154, 197, 244)','rgb(153, 219, 245)','rgb(167, 236, 238)','rgb(255, 238, 187)'],
  ['rgb(255, 247, 212)','rgb(255, 217, 90)','rgb(192, 127, 0)','rgb(76, 61, 61)'],
  ['rgb(100, 153, 233)','rgb(158, 221, 255)','rgb(166, 246, 255)','rgb(190, 255, 247)'],
  ['rgb(240, 240, 240)','rgb(33, 53, 85)','rgb(79, 112, 156)','rgb(229, 210, 131)'],
  ['rgb(206, 206, 90)','rgb(255, 225, 123)','rgb(253, 141, 20)','rgb(197, 22, 5)'],
  ['rgb(25, 4, 130)','rgb(119, 82, 254)','rgb(142, 143, 250)','rgb(194, 217, 255)'],
  ['rgb(181, 201, 154)','rgb(134, 43, 13)','rgb(255, 249, 201)','rgb(255, 201, 95)'],
  ['rgb(255, 230, 230)','rgb(225, 175, 209)','rgb(173, 136, 198)','rgb(116, 105, 182)'],
  ['rgb(236, 244, 214)','rgb(154, 208, 194)','rgb(45, 149, 150)','rgb(38, 80, 115)'],
  ['rgb(250, 240, 228)','rgb(155, 205, 210)','rgb(255, 133, 81)','rgb(255, 222, 222)'],
  ['rgb(242, 216, 216)','rgb(92, 137, 132)','rgb(84, 91, 119)','rgb(55, 66, 89)'],
  ['rgb(180, 180, 184)','rgb(199, 200, 204)','rgb(227, 225, 217)','rgb(242, 239, 229)'],
  ['rgb(12, 53, 106)','rgb(1, 116, 190)','rgb(255, 196, 54)','rgb(255, 240, 206)'],
  ['rgb(15, 15, 15)','rgb(35, 45, 63)','rgb(0, 91, 65)','rgb(0, 129, 112)'],
  ['rgb(128, 188, 189)','rgb(170, 217, 187)','rgb(213, 240, 193)','rgb(249, 247, 201)'],
  ['rgb(29, 93, 155)','rgb(117, 194, 246)','rgb(244, 209, 96)','rgb(251, 238, 172)'],
  ['rgb(107, 36, 12)','rgb(153, 77, 28)','rgb(228, 143, 69)','rgb(245, 204, 160)'],
  ['rgb(0, 21, 36)','rgb(68, 93, 72)','rgb(214, 204, 153)','rgb(253, 229, 212)'],
  ['rgb(218, 221, 177)','rgb(179, 164, 146)','rgb(191, 178, 158)','rgb(214, 199, 174)'],
  ['rgb(3, 6, 55)','rgb(60, 7, 83)','rgb(114, 4, 85)','rgb(145, 10, 103)'],
  ['rgb(25, 29, 136)','rgb(20, 80, 163)','rgb(51, 124, 207)','rgb(255, 196, 54)'],
  ['rgb(22, 48, 32)','rgb(48, 77, 48)','rgb(182, 196, 182)','rgb(238, 240, 229)'],
  ['rgb(82, 95, 225)','rgb(248, 111, 3)','rgb(255, 164, 27)','rgb(255, 246, 244)'],
  ['rgb(112, 98, 51)','rgb(176, 146, 106)','rgb(225, 199, 143)','rgb(250, 231, 201)'],
  ['rgb(101, 40, 247)','rgb(160, 118, 249)','rgb(215, 187, 245)','rgb(237, 228, 255)'],
  ['rgb(91, 8, 136)','rgb(113, 58, 190)','rgb(157, 118, 193)','rgb(229, 207, 247)'],
  ['rgb(255, 245, 224)','rgb(255, 105, 105)','rgb(187, 37, 37)','rgb(20, 30, 70)'],
  ['rgb(241, 239, 239)','rgb(204, 200, 170)','rgb(125, 124, 124)','rgb(25, 23, 23)'],
  ['rgb(83, 113, 136)','rgb(203, 178, 121)','rgb(225, 212, 187)','rgb(238, 238, 238)'],
  ['rgb(255, 190, 152)','rgb(254, 236, 226)','rgb(247, 222, 208)','rgb(226, 191, 179)'],
  ['rgb(86, 28, 36)','rgb(109, 41, 50)','rgb(199, 183, 163)','rgb(232, 216, 196)'],
  ['rgb(0, 0, 0)','rgb(244, 223, 200)','rgb(244, 234, 224)','rgb(250, 246, 240)'],
  ['rgb(205, 92, 8)','rgb(245, 232, 183)','rgb(193, 216, 195)','rgb(106, 156, 137)'],
  ['rgb(183, 4, 4)','rgb(219, 0, 91)','rgb(247, 147, 39)','rgb(255, 229, 105)'],
  ['rgb(252, 245, 237)','rgb(244, 191, 150)','rgb(206, 90, 103)','rgb(31, 23, 23)'],
  ['rgb(41, 75, 41)','rgb(80, 98, 58)','rgb(120, 148, 97)','rgb(219, 231, 201)'],
  ['rgb(14, 33, 160)','rgb(77, 45, 183)','rgb(157, 68, 192)','rgb(236, 83, 176)'],
  ['rgb(7, 15, 43)','rgb(27, 26, 85)','rgb(83, 92, 145)','rgb(146, 144, 195)'],
  ['rgb(255, 85, 187)','rgb(255, 211, 163)','rgb(252, 255, 178)','rgb(182, 234, 250)'],
  ['rgb(170, 200, 167)','rgb(195, 237, 192)','rgb(233, 255, 194)','rgb(253, 255, 174)'],
  ['rgb(228, 165, 255)','rgb(255, 170, 201)','rgb(255, 205, 168)','rgb(255, 231, 206)'],
  ['rgb(97, 12, 159)','rgb(148, 11, 146)','rgb(218, 12, 129)','rgb(233, 87, 147)'],
  ['rgb(49, 56, 102)','rgb(80, 64, 153)','rgb(151, 78, 195)','rgb(254, 123, 229)'],
  ['rgb(142, 122, 181)','rgb(183, 132, 183)','rgb(228, 147, 179)','rgb(238, 165, 166)'],
  ['rgb(113, 29, 176)','rgb(194, 18, 146)','rgb(239, 64, 64)','rgb(255, 167, 50)'],
  ['rgb(250, 240, 215)','rgb(255, 217, 192)','rgb(140, 192, 222)','rgb(204, 238, 188)'],
  ['rgb(249, 155, 125)','rgb(231, 97, 97)','rgb(176, 71, 89)','rgb(139, 172, 170)'],
  ['rgb(241, 194, 123)','rgb(255, 216, 156)','rgb(162, 205, 176)','rgb(133, 163, 137)'],
  ['rgb(148, 78, 99)','rgb(180, 123, 132)','rgb(202, 166, 166)','rgb(255, 231, 231)'],
  ['rgb(8, 2, 163)','rgb(255, 75, 145)','rgb(255, 118, 118)','rgb(255, 205, 75)'],
  ['rgb(255, 220, 182)','rgb(236, 201, 238)','rgb(201, 167, 235)','rgb(147, 132, 209)'],
  ['rgb(13, 18, 130)','rgb(238, 237, 237)','rgb(240, 222, 54)','rgb(215, 19, 19)'],
  ['rgb(46, 67, 116)','rgb(75, 82, 126)','rgb(124, 129, 173)','rgb(229, 195, 166)'],
  ['rgb(120, 193, 243)','rgb(155, 232, 216)','rgb(226, 246, 202)','rgb(248, 253, 207)'],
  ['rgb(57, 36, 103)','rgb(93, 53, 135)','rgb(163, 103, 177)','rgb(255, 209, 227)'],
  ['rgb(61, 12, 17)','rgb(216, 0, 50)','rgb(247, 140, 162)','rgb(249, 222, 201)'],
  ['rgb(121, 21, 91)','rgb(194, 51, 115)','rgb(246, 99, 92)','rgb(255, 186, 134)'],
  ['rgb(39, 0, 93)','rgb(148, 0, 255)','rgb(174, 210, 255)','rgb(228, 241, 255)'],
  ['rgb(236, 143, 94)','rgb(243, 182, 100)','rgb(241, 235, 144)','rgb(159, 187, 115)'],
  ['rgb(111, 97, 192)','rgb(160, 132, 232)','rgb(139, 232, 229)','rgb(213, 255, 228)'],
  ['rgb(53, 21, 93)','rgb(81, 43, 129)','rgb(68, 119, 206)','rgb(140, 171, 255)'],
  ['rgb(238, 237, 235)','rgb(224, 204, 190)','rgb(116, 114, 100)','rgb(60, 54, 51)'],
  ['rgb(255, 247, 241)','rgb(255, 228, 201)','rgb(231, 136, 149)','rgb(190, 209, 207)'],
]