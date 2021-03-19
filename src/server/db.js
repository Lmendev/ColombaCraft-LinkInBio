import instagram from "../images/social-icons/instagram.svg"
import playstore from "../images/social-icons/playstore.svg"
import web from "../images/social-icons/web.svg"
import mail from "../images/social-icons/mail.svg"
import colomba from "../images/logo-colomba-craft.gif"

const db =
  {
    "header": {
      "name": "@ColombaCraft",
      "text1": "Stickers y productos que personalizan tu mundo",
      "text2": "",
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
        "link": "#",
        "logo": playstore,
        "text": "Play Store"
      },
      {
        "id": "3",
        "link": "https://www.colombacraft.com/",
        "logo": web,
        "text": "Web Site"
      },
      {
        "id": "4",
        "link": "mailto:contacto@colombacraft.com?subject=Contacto desde LinkinBio&body=Hola Colombacraft 😃! %0D%0A%0D%0ALos he visto en las redes y me gustaría contactarlos por el siguiente motivo: %0D%0A%0D%0A",
        "logo": mail,
        "text": "Send Email"
      }
    ],
    "footer": {
      "text": ""
    }
  }

export default db