    new Vue({
      el: '#app',
      data: {
        isExporting: false,
        provinces: [
          '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江',
          '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南',
          '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州',
          '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆',
          '台湾', '香港', '澳门'
        ],
        nicknames: [
          '青瓜不是黄瓜', '冷接触', '譹', '一只琪', '白菜·', '怡仔.', '咕噜咕噜漁',
          '꒰ঌShᰔᩚa໒꒱', '一团周', '清风吹', '🐰우기🤍', '暴雨', 'sisnekux', '加贝.',
          '月亮不睡觉', '小王超爱螺蛳粉', '丰年', '腼腆小麻花', '⊹阮冬❅₊', '⠀⠀⠀ᵉⁿ',
          '契机莺', '＆', 'om恩齐', '嘟嘟嘟', "Lay's原味🍟", '何以解忧', '小琳困困',
          '哦呐呐呐', '岛屿.', '十五-', '张家老汉', '阿妍.', '别吃我蛋糕', '秋刀鱼.',
          '数学学不会', '連星', '惰性.', 'Victoria Lynn', 'yy', '清蒸魚.', '开心小丽',
          '屋顶橙子味waᴗngಣ', 'yyy', '默念', '陈周zhou', '白居易', '大脸妹er', 'Verity',
          '祁筱贤', '用户zbejdn37291', '烦薯你～', '泥•烂的', 'Qqqqqq❤️‍🔥💚🐼.',
          '衔雪寄思小禾', '浔念', '6666666', '小小cpr', '萍水之交', '⭐', '逾期',
          '南萱米桃', '苹果味虾条', '舒.', '在雨天养鱼_', 'ʕ•̫͡•ʔ', '时菀', '等誓言',
          '平安de“平”', '爱吃土豆粉的荷包蛋', '⁺✞ʚ雨宫莲重度依赖ɞ✟₊', '慢慢', '锅巴大王',
          '平安de“平”', '晞阳', '糯昔🐤', '雾昂', '陈陈姓陈不姓臣', '。', 'www',
          '日落时收尾', '妮妮^', '续.LuBai', 'ai7琦', '年糕.', '💤', '汐^',
          '用户8596632147', '豆包.', '江婉竹', 'ai7琦', '不是谁的影子（不自律一年不改名）',
          '— —', '小宅', '每天都好困', '葡萄柚', '伤害女人的事我做不到', '忘川。',
          '愛永不凋零', '零勾不吃就按头（已有🐢）', '杳栀♡'
        ],
        emojis: ['🎂', '🎉', '❤️', '🌹', '✨', '🥰', '🎈', '🎁'],
        comments: []
      },
      created() {
        this.generateComments();
      },
      methods: {
        generateComments() {
          const usedProvinces = new Set();

          // Real Douyin Avatars List (Expanded)
          const realAvatars = [
            'https://p3-pc-sign.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_640c38b927daae4cb56ea8993ec1737e.jpeg?lk3s=93de098e&x-expires=1766984400&x-signature=Jm6B0kd859DdGHAZzvumcD2KZu4%3D&from=2480802190&s=profile&se=false&sc=avatar&l=2025122713351767BBA5AE9FD3F3D3BC5F',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_92a1999eff88477884a8d5545fd08cce.jpeg?from=327834062',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_c1823e9314436a3668c54e52e667a38e.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_d7a4539d66223e50fdb277408efecb89.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o0odbAn472DAHe9fkda1hANAgEkgCLUIAAENDZ.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oEJPbfAQIIoYeOABndSByGsEMQwqEaAeAAbLA7.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_92a1999eff88477884a8d5545fd08cce.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oYDAoxJ5IEPqJP7FiMaiAsBn0TiLhAOKRAUAT.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_457465bca39c41f7ac601538c7a3c438.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_7a2ee0fc8c3460537902c3f1e6404540.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oY4AEEAFGIA3B9AwPHAPNBQvFu8BDfYCoEYphe.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_6f86fe5e55a3492b671fa093d498fc25.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oszCEU8AABinswAAQuXEfiY0zEesEI5uelyWWA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_5b7daadf343ea418598b657621c282bf.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o80O6ANDpCcvjDeFEAAHKAEsAApEfBLgk9I7Ay.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o0A0jHUf9oErHCAsC5DB87FKAY94gAzIVeXAQA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o0EZkmTAivwiR5BIA9QQgPABPItsALLM1yuAg.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_osja9WQPoIeAAAE8yETFeCXEQrDAHUARiwfT8N.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oAiiBbSiAdHtJTaAEnVM1Pvt8AIBAOhz01PrA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_65c71e45a431fea9ba84f6ccda168901.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oU6XIeN9AAWcTDnmAAgej4sQEbwxlFDC0ALdhA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_eed8bec71d3a416788c1ce87acbd986c.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oEBEQFBtiATtpiLSAeCCACEAV8YEInAfw0cOTi.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_272809db6dd819e070e14a141b348fb2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_ow9hAAAE9NMfAWAf1gANbIAAEAdnThDO92bAFC.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ooG6Fpe6AXpQRLABteEEAX8OIxQJDIfg7OHAZz.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_478d91fa8b4401324dc5ea8b873ffea8.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_26e28000286584f0bd36b.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o8GDCAXAEBjAIaFAQrnARpafXWf7EqBf9EBbgO.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o0BJAQTEBXnIBsL7SpgAfAAGocAeYxFSACSQfG.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_1e12a0000e41e70f466a3.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o0DGGDIAcbALaIffAE26fbe8AzGWTKAQqAmkd3.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oQJSSibKANPgLgWBIiaiPqIIEA3AK8qD0AvAA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_2adc7a79c75dfe863e93e19a075570b7.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_d13612fc21b9558d6a0ee8dbefe19e7e.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_9a46e00a55b88ac1e3f85e14978434b2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o0jfeG8KgAY1pgAHQEfInA4AQQPsAAL0fzQuAe.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oAzLUBEOIf7ECbAVmeTsrQ09OtAReGS3qAIAAB.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_0b94dc5a5e4047be9aa70a2ec01c8f44.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ok2A3FC9NDoEmnAyOgAsAeXQIf08nhAE0SQAxA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oACCn50AEiuDvVkdAAA9agfGAPAFeIEngIoQdC.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oUAIwi0AettEzA1fyAR2CWv8K7wBAEi4edFEwF.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_30d7634e54771cf1c30945924f345d24.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o8fmIuJjTAAQfG2YAIaZeA3AEfTGCLXsb4O32D.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_ogxDz9AMIIoSKfABkTOBmGMEJQj6EjAeAAeLA7.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_1b7a3aebf61be680f8e046f4bbb7146f.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_f2ca865b0578850c1af92586fa311544.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-c9aec8xkvj_acd2834313a04d6082004a9ef51bcfbe.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_d559dc6c5d71483ea830046f81a83683.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oE2AiAFHlID8h1AAzEAgfzEnpeQH92dADAOqrC.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_df314415cb1f2f1c7f54aa9a33826e30.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okB6ENEDAWfAZ6GA7ouKABLIpAFUK9ASeRC9kg.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o4zRZtgIhRzA6CLfN0CYDypPLAIAeAAAEG6PNq.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oAageAGVW7GChL2gjfhfwA0DAIoqIieQAAYdI0.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_3791_5035712059.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oQiAIeBfNYZE3bAeBpQ0wAiLFAABzCwEAqxNBE.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_owlAUEEfeoDA77AHvuAvFsXBfnGAGRQB9aIrp7.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o8AAEFQbUBtRDRqA9f0EEsAuweE4EAAIfpxUEh.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_owAV3Zwe2jIEPICNIOGeC9LqA1ffAAvQRmrAgD.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oIfCAfcgyEIGVI77AhIeueIjLDA2DA8kHUiOAQ.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o0T9mAeB0EnxAj9iiAA8QAEXAEAnfcmwyeIuD0.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_owUNRAA3yCAmnXRaCAfhgqzLAzAeGbAIEINNDR.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oQEgA0uExBciAUierZIAzuAerzwfwd9tAAlEjB.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_a6f8ed3d02d084a884f9d661e692f129.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oQQAabNS26AABIDUmgPAa2AoPiIDsiAEcjLa0.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ooIB0VAzSVi3AEXxkUCE3cAAiCeUuoAELwfie4.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_osBAtJA8ig1BES1UBIaoaSNiEAvASiU8vgIAP.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_owCClAAQnAAraVmfC1FEgpDSAHA9bJAQIifSNw.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o8Gm3AAB7Q8A8E3f1CIAlhDSAOCFEBNvEAWffh.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ooi9oAeAEEAfVIAMA0AwpAbteEiai7BBnv0vjz.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_309ac5ac12e008fcfa31b30288604f3c.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o8ExIAAAeIhfALBzOiDjvbSCHhyAkiAgNOEZCt.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okSOvAEGPEYeAeQLIAAWCAImBBcpeaHAA7Q5FR.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_bd9a6c1f762d463baef1baaef8bdfe5b.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o8dAliIzAQRnChpBIZaiPyMnEAyAu18ApAPAM.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ocy8ODAQQfMA8Q8XezQeBJeS3AYEtHAAIxSe82.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYTAaNAArIrjAIABD0PvA0p3iQI60HA5P5iHE.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oEjJAkSQHzDDHEsegQ8RffEkFBA7CAhrAUGuAI.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oc7bQ5ERJgAg3O7QAIc1eAQAedeG3LB9g8KDBB.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o0AkeE0IBIu1JEO8wifuAkAAgiGXA0EAX1ae6h.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_3792_5112637127.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oQEPAtIhyiAAXAlAE0iB6Uf2IAmqwqwREeMk8e.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oMQA5Efi1wdc0lzeTIETevAXALEsihAAB3DQCq.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oIODFEf8KA7A0C2gEAAYEfTDeroMoIAjpE89wX.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_386166202d4fc4424708bb921c392a35.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ocmjICgLJDAMyxAnAsF4A9nAGANghCt3QUfmeE.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o81PABfE1AiGAnUfAg7ojCo6bC9iqAwciILCAn.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oEGpA8GVQEiqmIIc9e7kBQfJ9PeQZgFNATAALR.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oo00oAB1EECiABxyfAAwIOAio2GhQgEyUXEen2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_24c661cec01e4c438dc7ed7a57af6997.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oAAfAbNsnBAKeApBejDR0wIjIEaQBUsAb07AYA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o06ETAvB7g2AlGfeBKQAH6GPAtILIBvUEAfcjX.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oUDGe0fdAG3hRFABVz7FABOsEfQJFIlg7ZHAFa.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_osA94YZfe0iHAeE7EPBNM0iqAjwhwA5EmEWAIA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_3bb330e5eb7f740a48ea02f8b81c3d9d.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_5f4f432e9f141f8bfa479632fae1f828.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oEbsmFE78DSBWUBeXgAEAx0uIfFjVdJEfnQA1A.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oUq7sbIFVAuaquafBeP1Q0AIGeA9LBAcYEANkQ.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_32161cf34d8f4707ac6b6fba26573779.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oAiKRPnvwhLizBMAdyADAAaBAaEIAPP4EvyF0.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o40meAG9CeFEHLseeMr7DAQHAIc7Qy1QAAUfIz.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_cf76b32785c3c5267fda38c9385c3e54.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oM59EYfZAJNLpU1TAAzAIfED9cmg3CAAA9hXNn.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o4aOvAArSEME4Bn044iDliBAIPphALph606uA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_960b138a73fa7b60279729264b37ee08.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_3b18c85a2b3a71b0221ee803d4581bac.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_okCjAtjSd8BAaALAEmDne3bXIApugd4IANI6e9.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oYtvaOAkAECIpiiSXxPiU8AIgb6AQAyoBAMop.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oUk0DflgAEKeQkMMkAowFEKiIf9RAARaGEGAXv.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_osVjedhv0ECAAAA5oCciODAiI2BA5lAVUgf5CM.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYVGQWC9AAeQaFDSAAgFFtS6IfHdoXECIA66qA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_5f8d8dcc6ee09e783b751b10b5477ccc.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oIM1VnUeQAClNPAAYArD9uZApIC9gAealmChSb.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oAeDAeiA1SmtEgIEqreLPB2GEUANRI7jR78AAJ.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oYB2EeEDAjfE2kdALoy3AS5IaAFcf9AdOnEYcw.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ocsOENOTKBAxhnAWAMi3AezACAog0C5RIqf3Ji.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oYEAwmmAGCNAag9NnkIACFEAT1DWjsADpffgOC.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_owAiAfSeDBBSFAoBeLE48IEFlEGIy28Ak47RCA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_f0d5818b105f9475a39994d35a9d2906.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oMsAVAth5gUQyAHNmICKeiA3AoEHfMAAzOCZJj.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_osk1esSB0ECAAAA1hCmijAIiIyBAizAPfgPdH2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_ocKRBkeGEQJe7yRB9jpYKXj4fEhAMI4ALAATgA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_db1413c191e177593e533bbda3167f11.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYmDNAzxHSCAufeky5KzVADAgELJC3ZIAAJKhY.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oYEAPniAyC8AXg9a1zIADFEAUxDyZzAUEfeVRD.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okwigzyPAhAEUB4RiAD0oaPoBOIILjPPAA8tg.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_ad3a80fe66cb5d7526066fbf6f614d89.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o0I9dDoA1RLnYWKLDAEjqiFCtAACGgfeEVAAW1.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oEBeBiwgEo0AqqAqIEFALeiAHo1dhEfsxbAWNS.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_473dce158c0c4a5ab473a91623389347.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_owgwFtNkAGrAxyep9EQEEaVecEQXIAFGABAIfD.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/aweme_default_avatar.png.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_7f4b179124754b97bdb0272b1693eab2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_38521dac81517de1eaf3e804cd4f0af0.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_e4852458c19b483691a98cf544d3adb3.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_3f00c3a1b2f34a124ac06f9815de6863.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o0IzRHLiPkAgO0QCgjAPE5BBAQAOIAsunAiLa.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_okBw91Ig8zAXeQhGAW7xFL8eAmMfJEAQGAbSlu.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_843ecaf63b2acf1c2828f89bb0076233.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_f20d5208332b4cfba0d4a5fd4004dc04.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oEQAuJJDIA8jL0bvFUiIA5EBsPVhiAaQYgwAB.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oYAbAfMMBEC0iA2ANVi6vcERSEeIvP1w7seNSA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_owAEK40xAXeAiYuAi6AAwEIBPwrehAXEGHf6D2.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_o4DUKffvAFqQpFAAUv5CA6NuERQAFIxg9uCApo.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_7fc25937005e442a95819c5b84a18a67.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_oYSAkCEmfkDA9ogdHFADFnUAfiDACpQAwZI589.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_31a810003cf68d4713b6f.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_okA9reEgCHAiFi6pA398zDfEAaBnACAIcArptP.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_329c27a10ed4277fd552aaead882074d.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_o4BinLESESwAeQpE9K1BfEKeaWAiAARwA1Q0Ir.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oUAVhqAJAOi3ECVA2P1nmYidI0dvBaAJAYBMr.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_bd6b0000215e4160b174013045003fd8.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_5b7778eec06b6eea2af12bcf2d098857.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ooWQxA7B7QeAxGseTEIA69GNAfmLIBblEAB8XF.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ogEAYyvABCCAxgevEmIADfhAhUzPMbAIdNsZLC.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_3cdaef22efc5642485d612ec09e8177c.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_856c2a18f99d8a90cc92d8b8208f0af9.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oAPZLQaBKIh7PMnAWmAuzBkAAiAARBCiIElA4.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_e8d3e7af8746e7f27707f95e43bb8dc7.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_bc1d959484145e287a0d44efd955e1c6.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oAcADyADAFleACCA7n0g9IgAgEENfAlDIJyCDJ.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oQC4zBwOfAENaAAIAD9pLDEKQEEeFAA8eEAIqp.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ogebogh9mIXoAOxEEnJwx3D6FofAAEeAFQjBAW.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_5a44bcec9cfb4ebdb96293375e1d0ebc.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_bf54da71d690482c87a9b05a917e60aa.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_eb930857fb8ba8e8a3a0041bc7151425.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oAlxEbgeSDAsCAElA4AEgIQebAAGXCADUnR9b8.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_7855360c58d547378aa401e890c33a93.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oMRAEARnJIAXfANYUVdUBfAEFwE2GCDApEW9AF.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_okoBiCdTeA6ABBkDEAAnivmeN0Q6pIASIAv9gG.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oIiCE2RDAGINsAAAfNsIeL8keCIcHIU52N2fuA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oMhFeACoEU9DDWAbnfsxtId3oZA1MDvd7AEgAA.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_3df2dba73e4b79adc51648381e5e8283.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_71ecc46279dfba5cf09a6e76b052a2b9.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ok8z9kA3sCHhAyDJAAIAUNXNiWSg7fEzAECCle.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_975ea01b5e159b1e013b418ba8c5d88e.jpeg?from=327834062&se=false&biz_tag=feed_avatar&l=2025122713352991B2D1BE7544BA8741D7',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_143982a7c0fb4532392f4a8eb6eb37a1.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ogNElkoD7CAfX9pEAIMALAAB95ug1yYyzAechD.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/aweme_default_avatar.png.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_oYA8EiWyTFM0ALBhtniaclPAAhcwBuyEAIiPb.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/mosaic-legacy_26e860000cb3504bb66b9.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oMMxHANDpCfsvPRFEAAnwAIrAAoUfSzg69QGCs.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_ogGrAI2AxQPpDLzB2GMeGgrEenAeE7A7lRITAB.jpeg?from=2064092626',
            'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_48c4bedd247b4cfa83268a3ba4bb2d0c.jpeg?card_type=153&column_n=0&from=327834062',

          ];

          // Shuffle avatars to ensure unique selection
          realAvatars.sort(() => Math.random() - 0.5);

          const count = 24; // Fill the page
          for (let i = 0; i < count; i++) {
            // Random Province
            const province = this.provinces[Math.floor(Math.random() * this.provinces.length)];

            // Random Nickname
            const nickname = this.nicknames[Math.floor(Math.random() * this.nicknames.length)];

            // Random Time (1-5 days ago)
            const daysAgo = Math.floor(Math.random() * 5) + 1;

            // Random Likes
            const likes = Math.floor(Math.random() * 100);

            // Random Emoji
            const emoji = Math.random() > 0.5 ? this.emojis[Math.floor(Math.random() * this.emojis.length)] : '';

            this.comments.push({
              avatar: realAvatars[i % realAvatars.length],
              nickname: nickname,
              province: province,
              time: `${daysAgo}天前`,
              likes: likes,
              emoji: emoji
            });
          }
        }
      },
      async exportToImage() {
        this.isExporting = true;
        try {
          // Wait for images to load
          await Promise.all(
            Array.from(document.querySelectorAll('.avatar')).map(img => {
              if (img.complete) return Promise.resolve();
              return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
              });
            })
          );

          // Capture the page
          const element = document.getElementById('export-page');
          const canvas = await html2canvas(element, {
            scale: 2, // Higher resolution for better print quality
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: element.offsetWidth,
            height: element.offsetHeight,
            scrollX: 0,
            scrollY: 0
          });

          // Convert to blob and download
          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `谌雅婷生日快乐_${new Date().getTime()}.png`;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            // Show success message
            this.$nextTick(() => {
              alert('图片导出成功！请查看下载文件。');
            });
          }, 'image/png', 1.0);

        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请重试。');
        } finally {
          this.isExporting = false;
        }
      }
    }
    });
