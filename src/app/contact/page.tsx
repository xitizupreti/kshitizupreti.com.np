import Image from "next/image";

export default function Contacts() {
  const contacts = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/kshitizupreti/",
      imgSrc: "/contacts/Linkedin.png",
      alt: "Linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/xitizupreti",
      imgSrc: "/contacts/GitHub.png",
      alt: "GitHub",
    },
    {
      name: "Gmail",
      href: "mailto:upreti.kshitiz.ku@gmail.com",
      imgSrc: "/contacts/Gmail.png",
      alt: "Gmail",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/xitizupreti",
      imgSrc: "/contacts/Facebook.png",
      alt: "Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kshitizupreti",
      imgSrc: "/contacts/Instagram.png",
      alt: "Instagram",
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/kshitizupreti",
      imgSrc: "/contacts/Twitter.png",
      alt: "Twitter",
    },
    {
      name: "Call",
      href: "tel:009779812648042",
      imgSrc: "/contacts/Call.png",
      alt: "Call",
    },
    {
      name: "ConfessOut",
      href: "https://www.confessout.com/kshitizupreti",
      imgSrc: "/contacts/confessout.jpg",
      alt: "ConfessOut",
    },
    {
      name: "Discord",
      href: "https://discord.gg/cvrz7gHSuk",
      imgSrc: "/contacts/Discord.png",
      alt: "Discord",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@kshitizupreti",
      imgSrc: "/contacts/Youtube.png",
      alt: "Youtube",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@xitizupreti",
      imgSrc: "/contacts/TikTok.png",
      alt: "TikTok",
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/user/kz8su8g0dffcesiyf6e1lgqe3",
      imgSrc: "/contacts/Spotify.png",
      alt: "Spotify",
    },
  ];

  return (
    <div id="contact" className="relative top-[-100px] p-9 w-full bg-[#f2f3f5]">
      <h1 className="uppercase text-[#ffa460] md:text-4xl text-4xl p-4 md:p-6 text-center font-bold">
        Get in Touch
      </h1>
      <h2 className="text-2xl font-bold ml-[10%] mb-4">Let’s Connect</h2>
      <h1 className="text-2xl font-bold w-fit ml-[10%] mb-8">
        <span className="dynamic-text">
          Reach out through any of the platforms below:
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  justify-items-center">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="text-center w-[80%] bg-white p-4 rounded shadow-md"
          >
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={contact.imgSrc}
                alt={contact.alt}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{contact.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
