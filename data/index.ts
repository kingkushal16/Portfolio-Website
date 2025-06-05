export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize team collaboration and try to foster open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I am highly adaptable and a quick learner",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start text-right",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Tech Interests",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I am incredibly passionate about technology, philosophy, and sports.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently researching new applications of large language models (LLMs).",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-40 opacity-70",
      titleClassName: "justify-start md:justify-start lg:justify-center",
      img: "/llm.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Sign Language Detection",
      des: "An Indian sign language detector using mobilenet v4 model, trained on a custom dataset.",
      img: "/Sign_language_detection.png",
      iconLists: ["/kotlin.svg","/python.svg","/Jupyter.svg"],
      link: "https://github.com/kingkushal16/sign_language_to_speech",
    },
    {
      id: 2,
      title: "Smart Parking Management",
      des: "A parking management system that involves a blend of AI and hardware to enable efficent use of parking spots.",
      img: "/smart_parking_management.png",
      iconLists: ["/html.svg","/python.svg","/Jupyter.svg", "/c++.svg"],
      link: "https://github.com/kingkushal16/Smart-parking-monitoring",
    },
    {
      id: 3,
      title: "ByteForge",
      des: "An online IDE to conduct lab tests at RVCE.",
      img: "/smart_parking_management.png",
      iconLists: ["/dockerName.svg","/html.svg","/javascript.svg", "/c++.svg"],
      link: "https://github.com/kingkushal16/integrated-remote-code-execution-system",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer Intern - InMobi",
      desc: "Optimized model monitoring and compliance pipelines, migrated 40+ jobs to GKS reducing costs by ~50%, and implemented Grafana monitoring using push gateway.",
      className: "md:col-span-2",
      thumbnail: "/inmobi.png",
    },    
    {
      id: 2,
      title: "Intern - COE in VC, RVCE ",
      desc: "Working with modern computer vision techniques to make models that can help society",
      className: "md:col-span-2",
      thumbnail: "/VC.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/kingkushal16"
    },
    {
      id: 2,
      img: "/leetcode.svg",
      link: "https://leetcode.com/u/jkushal16/"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/kushal-j-3b815b210/"
    },
  ];