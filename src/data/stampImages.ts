// 每枚邮票的图片生成 prompt，描述邮票的真实视觉内容
// 使用图片生成 API 生成逼真的邮票图片

export const stampImagePrompts: Record<string, string> = {
  // ==================== 1940s ====================
  "1949-1":
    "A photorealistic scan of a 1949 Chinese commemorative postage stamp, featuring Chairman Mao Zedong portrait and Five-Star Red Flag, founding of People's Republic of China, red and gold colors, vintage stamp with perforated edges, aged paper texture",
  "1949-2":
    "A photorealistic scan of a 1949 Chinese postage stamp, featuring Beijing Xinhua Gate building and Chinese People's Political Consultative Conference emblem, red tone, vintage stamp with perforated edges",
  "1947-1":
    "A photorealistic scan of a 1947 Chinese liberation area postage stamp, featuring Mao Zedong portrait, simple stone-print style, brown and red colors, rough vintage stamp, no perforation, aged paper",
  "1945-1":
    "A photorealistic scan of a 1945 Chinese postage stamp commemorating victory in War of Resistance, featuring peace dove and victory symbols, blue and gold colors, vintage stamp with perforated edges",
  "1948-1":
    "A photorealistic scan of a 1948 Chinese liberation area postage stamp from Shandong, featuring map and postal emblem, green and brown colors, simple stone-print style, vintage stamp",
  "1949-3":
    "A photorealistic scan of a 1949 Chinese postage stamp, featuring globe and workers' hands, World Federation of Trade Unions conference, red and blue colors, vintage stamp with perforated edges",
  "1946-1":
    "A photorealistic scan of a 1946 Chinese liberation area postage stamp from Jinsui, featuring simple postal symbol, brown tone, rough stone-print style, vintage stamp, aged paper",

  // ==================== 1950s ====================
  "1950-1":
    "A photorealistic scan of a 1950 Chinese commemorative postage stamp, featuring Chairman Mao portrait and Tiananmen Gate, founding of PRC reissue, red and gold colors, vintage stamp with perforated edges",
  "1951-1":
    "A photorealistic scan of a 1951 Chinese postage stamp, featuring Picasso-style peace dove flying, Defend World Peace theme, blue and white colors, engraved printing, vintage stamp with perforated edges",
  "1953-1":
    "A photorealistic scan of a 1953 Chinese postage stamp, featuring industrial construction scenes with factories and smokestacks, First Five-Year Plan, red and gray colors, vintage stamp with perforated edges",
  "1955-1":
    "A photorealistic scan of a 1955 Chinese postage stamp, featuring portrait of ancient Chinese scientist Zhang Heng, traditional Chinese painting style, brown and gold colors, engraved printing, vintage stamp",
  "1957-1":
    "A photorealistic scan of a 1957 Chinese postage stamp, featuring Wuhan Yangtze River Bridge full view spanning the river, green and blue tones, vintage stamp with perforated edges",
  "1958-1":
    "A photorealistic scan of a 1958 Chinese postage stamp, featuring agricultural and industrial production scenes, People's Commune theme, red and green colors, vintage stamp with perforated edges",
  "1959-1":
    "A photorealistic scan of a 1959 Chinese commemorative postage stamp, featuring Tiananmen Gate and national emblem, 10th anniversary of PRC, red and gold colors, vintage stamp with perforated edges",
  "1956-1":
    "A photorealistic scan of a 1956 Chinese postage stamp, featuring Beijing Tiananmen Square scenic view, capital landmarks, red and blue colors, vintage stamp with perforated edges",
  "1952-1":
    "A photorealistic scan of a 1952 Chinese postage stamp, featuring Dunhuang murals and ancient Chinese cultural relics, Great Motherland theme, brown and gold colors, engraved printing, vintage stamp",

  // ==================== 1960s ====================
  "1960-1":
    "A photorealistic scan of a 1960 Chinese postage stamp, featuring detailed colorful chrysanthemum flower painting, eighteen varieties, vibrant red yellow pink colors, traditional Chinese botanical art, vintage stamp with perforated edges",
  "1962-1":
    "A photorealistic scan of a 1962 Chinese postage stamp, featuring Mei Lanfang Peking Opera character in elaborate costume and makeup, classical Chinese opera art, red and gold colors, vintage stamp with perforated edges",
  "1963-1":
    "A photorealistic scan of a 1963 Chinese postage stamp, featuring Tang Dynasty Sancai tricolor glazed pottery horse and camel, brown green yellow glaze colors, traditional Chinese artifact, vintage stamp with perforated edges",
  "1964-1":
    "A photorealistic scan of a 1964 Chinese commemorative postage stamp, featuring people of all ethnic groups celebrating together, 15th anniversary of PRC, red and gold colors, vintage stamp with perforated edges",
  "1965-1":
    "A photorealistic scan of a 1965 Chinese postage stamp, featuring Sun Yat-sen portrait, 100th birthday commemoration, brown and red colors, vintage stamp with perforated edges",
  "1967-1":
    "A photorealistic scan of a 1967 Chinese Cultural Revolution postage stamp, featuring red Quotations from Chairman Mao book, red background with gold text, vintage stamp with perforated edges",
  "1968-1":
    "A photorealistic scan of a 1968 Chinese Cultural Revolution postage stamp, featuring map of China in red with workers peasants and soldiers holding red flags, bright red background, vintage stamp with perforated edges",
  "1966-1":
    "A photorealistic scan of a 1966 Chinese postage stamp, featuring women working in service industries, nurse and postal worker, blue and red colors, vintage stamp with perforated edges",
  "1963-2":
    "A photorealistic scan of a 1963 Chinese postage stamp, featuring Huang Mountain scenic landscape with pine trees and clouds, traditional Chinese landscape painting style, green and blue colors, vintage stamp with perforated edges",

  // ==================== 1970s ====================
  "1974-1":
    "A photorealistic scan of a 1974 Chinese postage stamp, featuring gymnastics athletes in action poses, gymnastics apparatus, red and blue colors, vintage stamp with perforated edges",
  "1979-1":
    "A photorealistic scan of a 1979 Chinese postage stamp, featuring detailed colorful camellia flower painting, ten varieties, vibrant red pink white colors, traditional Chinese botanical art, vintage stamp with perforated edges",
  "1978-1":
    "A photorealistic scan of a 1978 Chinese postage stamp, featuring Xu Beihong galloping horses ink wash painting, dynamic running horses, brown and black ink colors, traditional Chinese painting, vintage stamp with perforated edges",
  "1973-1":
    "A photorealistic scan of a 1973 Chinese postage stamp, featuring giant panda eating bamboo, cute panda illustration, black and white with green bamboo, vintage stamp with perforated edges",
  "1975-1":
    "A photorealistic scan of a 1975 Chinese postage stamp, featuring industrial and agricultural construction scenes, Fourth Five-Year Plan achievements, red and blue colors, vintage stamp with perforated edges",
  "1977-1":
    "A photorealistic scan of a 1977 Chinese postage stamp, featuring Chairman Mao Zedong portrait at different historical periods, red and gold colors, commemorative stamp, vintage stamp with perforated edges",
  "1979-2":
    "A photorealistic scan of a 1979 Chinese postage stamp, featuring Journey to the West Sun Wukong Monkey King character in action, classical Chinese literature illustration, colorful design, vintage stamp with perforated edges",
  "1971-1":
    "A photorealistic scan of a 1971 Chinese postage stamp, featuring revolutionary modern Peking Opera scene, Taking Tiger Mountain by Strategy, red and blue colors, Cultural Revolution style, vintage stamp with perforated edges",
  "1979-3":
    "A photorealistic scan of a 1979 Chinese postage stamp, featuring children of different countries holding hands together, International Year of the Child, colorful design, vintage stamp with perforated edges",

  // ==================== 1980s ====================
  "1980-1":
    "A photorealistic scan of a 1980 Chinese zodiac postage stamp, featuring a detailed golden-brown monkey portrait painted in traditional Chinese ink wash style by Huang Yongyu, red denomination text, black engraved fur details, vintage stamp with perforated edges",
  "1980-2":
    "A photorealistic scan of a 1980 Chinese postage stamp, featuring Qi Baishi traditional Chinese ink painting of shrimp and flowers, minimalist brushstroke style, black ink with red seal, vintage stamp with perforated edges",
  "1981-1":
    "A photorealistic scan of a 1981 Chinese postage stamp, featuring Dream of the Red Chamber Twelve Beauties of Jinling, classical Chinese lady in elegant traditional dress, delicate painting style, purple and gold colors, vintage stamp with perforated edges",
  "1983-1":
    "A photorealistic scan of a 1983 Chinese postage stamp, featuring Romance of the Western Chamber scene, Cui Yingying and Zhang Sheng love story, classical Chinese gongbi painting style, red and gold colors, vintage stamp with perforated edges",
  "1984-1":
    "A photorealistic scan of a 1984 Chinese postage stamp, featuring Tang Dynasty Court Ladies with Flowers painting by Zhou Fang, elegant women in Tang dynasty costumes, traditional Chinese painting, gold and red colors, vintage stamp with perforated edges",
  "1985-1":
    "A photorealistic scan of a 1985 Chinese postage stamp, featuring detailed plum blossom flower painting, six varieties, red and pink flowers on branches, traditional Chinese botanical art, vintage stamp with perforated edges",
  "1986-1":
    "A photorealistic scan of a 1986 Chinese zodiac postage stamp, featuring decorative tiger illustration, Year of the Tiger, orange and brown colors with red accents, folk art style, vintage stamp with perforated edges",
  "1987-1":
    "A photorealistic scan of a 1987 Chinese zodiac postage stamp, featuring paper-cut style white rabbit, Year of the Rabbit, red and white colors, folk paper-cut art style, vintage stamp with perforated edges",
  "1988-1":
    "A photorealistic scan of a 1988 Chinese postage stamp, featuring ancient Marquis Yi of Zeng bronze bianzhong chime bells, bronze artifacts, brown and green patina colors, traditional Chinese artifact, vintage stamp with perforated edges",
  "1989-1":
    "A photorealistic scan of a 1989 Chinese postage stamp, featuring Mawangdui Han Dynasty T-shaped silk painting, ancient Chinese mythological figures, red and brown colors, traditional Chinese artifact, vintage stamp with perforated edges",
  "1982-1":
    "A photorealistic scan of a 1982 Chinese postage stamp, featuring colorful beneficial birds illustration, hoopoe and oriole and woodpecker, green and yellow colors, nature wildlife art, vintage stamp with perforated edges",
  "1984-2":
    "A photorealistic scan of a 1984 Chinese postage stamp, featuring Mount Emei scenic landscape with ancient temples and sea of clouds, green and blue colors, traditional Chinese landscape, vintage stamp with perforated edges",

  // ==================== 1990s ====================
  "1990-1":
    "A photorealistic scan of a 1990 Chinese postage stamp, featuring elegant orchid flower painting, four varieties, green leaves with white and pink flowers, traditional Chinese botanical art, vintage stamp with perforated edges",
  "1992-1":
    "A photorealistic scan of a 1992 Chinese zodiac postage stamp, featuring paper-cut style monkey, Year of the Monkey second series, red and yellow colors, folk art style, vintage stamp with perforated edges",
  "1995-1":
    "A photorealistic scan of a 1995 Chinese zodiac postage stamp, featuring folk cloth-toy style pig, Year of the Pig second series, red and pink colors, folk art style, vintage stamp with perforated edges",
  "1997-1":
    "A photorealistic scan of a 1997 Chinese commemorative postage stamp, featuring Hong Kong Bank of China Tower building with Five-Star Red Flag and Bauhinia flower flag, red and white colors, vintage stamp with perforated edges",
  "1999-1":
    "A photorealistic scan of a 1999 Chinese zodiac postage stamp, featuring hand-painted lantern-shaped rabbit, Year of the Rabbit second series, warm red and gold colors, folk art style, vintage stamp with perforated edges",
  "1999-2":
    "A photorealistic scan of a 1999 Chinese commemorative postage stamp, featuring Macau St. Paul's Ruins with Five-Star Red Flag and Lotus flower flag, green and red colors, vintage stamp with perforated edges",
  "1994-1":
    "A photorealistic scan of a 1994 Chinese zodiac postage stamp, featuring folk cloth-toy style dog, Year of the Dog second series, brown and red colors, folk art style, vintage stamp with perforated edges",
  "1998-1":
    "A photorealistic scan of a 1998 Chinese zodiac postage stamp, featuring folk cloth-tiger style tiger, Year of the Tiger second series, yellow and red colors, folk art style, vintage stamp with perforated edges",

  // ==================== 2000s ====================
  "2000-1":
    "A photorealistic scan of a 2000 Chinese zodiac postage stamp, featuring decorative dragon illustration, Year of the Dragon second series, golden and red colors, traditional Chinese dragon art, vintage stamp with perforated edges",
  "2004-1":
    "A photorealistic scan of a 2004 Chinese zodiac postage stamp, featuring modern design style monkey, Year of the Monkey third series, red and gold colors, contemporary graphic design, vintage stamp with perforated edges",
  "2008-1":
    "A photorealistic scan of a 2008 Chinese commemorative postage stamp, featuring Beijing Olympic Games emblem Dancing Beijing seal logo, red seal on white background, vintage stamp with perforated edges",
  "2008-2":
    "A photorealistic scan of a 2008 Chinese commemorative postage stamp, featuring Beijing Olympic Fuwa mascots Beibei Jingjing Huanhuan Yingying Nini, five colorful cartoon characters, vintage stamp with perforated edges",
  "2006-1":
    "A photorealistic scan of a 2006 Chinese zodiac postage stamp, featuring paper-cut style dog, Year of the Dog third series, red and yellow colors, folk paper-cut art style, vintage stamp with perforated edges",
  "2005-1":
    "A photorealistic scan of a 2005 Chinese zodiac postage stamp, featuring paper-cut and embroidery style rooster, Year of the Rooster third series, red and gold colors, folk art style, vintage stamp with perforated edges",
  "2009-1":
    "A photorealistic scan of a 2009 Chinese zodiac postage stamp, featuring strong powerful ox illustration, Year of the Ox third series, brown and red colors, modern design style, vintage stamp with perforated edges",
  "2007-1":
    "A photorealistic scan of a 2007 Chinese zodiac postage stamp, featuring round cute pig illustration, Year of the Pig third series, pink and red colors, modern illustration style, vintage stamp with perforated edges",

  // ==================== 2010s ====================
  "2010-1":
    "A photorealistic scan of a 2010 Chinese zodiac postage stamp, featuring modern geometric style tiger, Year of the Tiger third series, orange and brown colors, contemporary design, vintage stamp with perforated edges",
  "2012-1":
    "A photorealistic scan of a 2012 Chinese zodiac postage stamp, featuring majestic powerful dragon illustration, Year of the Dragon third series, red and gold colors, traditional Chinese dragon design, vintage stamp with perforated edges",
  "2016-1":
    "A photorealistic scan of a 2016 Chinese zodiac postage stamp, featuring a detailed monkey portrait painted by Huang Yongyu, Year of the Monkey fourth series, red and brown colors, traditional Chinese ink wash style, vintage stamp with perforated edges",
  "2017-1":
    "A photorealistic scan of a 2017 Chinese zodiac postage stamp, featuring majestic rooster illustration by Han Meilin, Year of the Rooster fourth series, red and gold colors, decorative folk art style, vintage stamp with perforated edges",
  "2014-1":
    "A photorealistic scan of a 2014 Chinese zodiac postage stamp, featuring dynamic galloping horse illustration, Year of the Horse third series, golden and red colors, modern design style, vintage stamp with perforated edges",
  "2019-1":
    "A photorealistic scan of a 2019 Chinese zodiac postage stamp, featuring happy pig family illustration by Han Meilin, Year of the Pig fourth series, red and pink colors, warm family scene, vintage stamp with perforated edges",
  "2018-1":
    "A photorealistic scan of a 2018 Chinese zodiac postage stamp, featuring loyal honest dog illustration by Zhou Lingzhao, Year of the Dog fourth series, brown and red colors, folk art style, vintage stamp with perforated edges",

  // ==================== 2020s ====================
  "2020-1":
    "A photorealistic scan of a 2020 Chinese zodiac postage stamp, featuring lively cute rat illustration by Han Meilin, Year of the Rat fourth series, red and orange colors, decorative style, vintage stamp with perforated edges",
  "2021-1":
    "A photorealistic scan of a 2021 Chinese zodiac postage stamp, featuring powerful running ox illustration, Year of the Ox fourth series, brown and gold colors, strong dynamic design, vintage stamp with perforated edges",
  "2022-1":
    "A photorealistic scan of a 2022 Chinese zodiac postage stamp, featuring majestic tiger illustration by Feng Dazhong, Year of the Tiger fourth series, orange and brown colors, gongbi painting style, vintage stamp with perforated edges",
  "2023-1":
    "A photorealistic scan of a 2023 Chinese zodiac postage stamp, featuring blue rabbit illustration by Huang Yongui, Year of the Rabbit fourth series, blue and red colors, whimsical art style, vintage stamp with perforated edges",
  "2024-1":
    "A photorealistic scan of a 2024 Chinese zodiac postage stamp, featuring majestic Chinese dragon illustration by Wang Huming, Year of the Dragon fourth series, red and gold colors, traditional dragon design, vintage stamp with perforated edges",
  "2025-1":
    "A photorealistic scan of a 2025 Chinese zodiac postage stamp, featuring folk art style snake holding lingzhi mushroom, Year of the Snake fourth series, green and gold colors, folk art style, vintage stamp with perforated edges",
};

// 图片生成 API 基础 URL
export const IMAGE_API_BASE =
  "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image";

// 构建邮票图片 URL
export function getStampImageUrl(stampId: string): string | null {
  const prompt = stampImagePrompts[stampId];
  if (!prompt) return null;
  return `${IMAGE_API_BASE}?prompt=${encodeURIComponent(prompt)}&image_size=portrait_4_3`;
}
