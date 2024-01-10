import 'dotenv/config'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { requireEnvironmentVariable } from './utils/helpers'

// Access your API key as an environment variable (see "Set up your API key" above)
const key = requireEnvironmentVariable('GEMINI_API_KEY')
const genAI = new GoogleGenerativeAI(key)

// Models can be found here https://ai.google.dev/models/gemini
// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

async function run() {
  console.time()
  const prompt = 'Write a story about a magic backpack.'
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
  console.timeEnd()
  /**
    In a bustling city known for its vibrant culture and sprawling streets, lived a young girl named Lily. Lily was an ordinary girl with an extraordinary secret: she possessed a magic backpack gifted to her by her eccentric grandmother.
    The backpack, made of vibrant blue fabric, had intricate patterns adorned with twinkling constellations. At first glance, it seemed like any other backpack, but there was more to it than met the eye. Lily discovered its magic when she accidentally placed her hand inside and felt a sensation of being pulled into a vast, swirling vortex.
    As she stepped into the interior of the backpack, Lily was transported to a whimsical and vibrant world. Trees sparkled like diamonds, flowers hummed melodious tunes, and the air was filled with the enchanting sound of laughter. It was a world where imagination ran wild, and anything was possible.
    Lily quickly realized that the magic backpack was more than just a portal to a fantastical realm. It had the ability to grant wishes and make dreams come true. All she had to do was believe wholeheartedly and speak her desires into existence.
    With each wish, the backpack would transform, manifesting objects or experiences that matched Lily's intentions. She could create a feast of her favorite foods, summon a playful puppy for companionship, or even embark on thrilling adventures that seemed impossible in the real world.
    News of Lily's magical backpack spread throughout her neighborhood like wildfire. Children and adults alike flocked to her, eager to witness the wonders she could conjure. Some were skeptical, dismissing her stories as mere imagination, while others were filled with awe and wonder.
    Lily found herself caught in a whirlwind of attention, but she remained grounded. She used her gift to bring joy to those around her, spreading kindness and creating moments of pure enchantment. From organizing surprise birthday parties to leading magical parades through the streets, Lily became the heart and soul of her community.
    However, as with all great power, the magic backpack came with its own set of challenges. Lily had to learn the importance of responsibility and the consequences that accompanied her wishes. She realized that true happiness could not be found solely through material possessions or fleeting desires.
    With the guidance of her wise grandmother, Lily embarked on a journey of self-discovery and introspection. She explored the deeper meaning behind her wishes, seeking to understand her true purpose and passions. Along the way, she discovered that the real magic lay not within the backpack but within her own heart.
    In the end, Lily chose to share the magic of her backpack with the world. She opened up workshops and events where people of all ages could explore their own creativity and imagination. Together, they learned that true magic lies in the power of belief, the strength of community, and the boundless potential of the human spirit.
    default: 12.407s
  */
}

run()
