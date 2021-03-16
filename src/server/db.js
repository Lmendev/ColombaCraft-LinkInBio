import instagram from "../images/social-icons/instagram.svg"
import playstore from "../images/social-icons/playstore.svg"
import web from "../images/social-icons/web.svg"
import mail from "../images/social-icons/mail.svg"
import colomba from "../images/logo-colomba-craft.gif"

const db =
  {
    "header": {
      "name": "@ColombaCraft",
      "text1": "text1",
      "text2": "text2",
      "logo": colomba
    },
    "socialprofiles": [
      {
        "id": "1",
        "link": "https://www.instagram.com/colombacraft/",
        "logo": instagram,
        "text": "Instagram"
      },
      {
        "id": "2",
        "link": "https://www.colombacraft.com/",
        "logo": playstore,
        "text": "Play Store"
      },
      {
        "id": "3",
        "link": "https://www.colombacraft.com/",
        "logo": web,
        "text": "WebSite"
      },
      {
        "id": "4",
        "link": "https://www.colombacraft.com/",
        "logo": mail,
        "text": "Mail"
      }
    ],
    "footer": {
      "text": "Stickers y productos que personalizan tu mundo 🙌"
    }
  }

export default db