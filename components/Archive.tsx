import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      title: "Web Development",
      des: "Custom websites built with modern technologies like React, Next.js and Node.js",
      listItem: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      link: "#web-development"
    },
    {
      title: "E-Commerce Website",
      des: "Complete online stores with payment processing and inventory management",
      listItem: ["Shopify", "WooCommerce", "MERN Stack", "Payment APIs"],
      link: "#ecommerce"
    },
    {
      title: "Portal Websites",
      des: "Feature-rich portals for businesses and institutions",
      listItem: ["User Auth", "Database", "Admin Dashboards", "CMS"],
      link: "#portals"
    },
    {
      title: "Search Engine Optimization",
      des: "Improve visibility and ranking on search engines",
      listItem: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
      link: "#seo"
    },
    {
      title: "Cloud Computing",
      des: "Scalable cloud solutions using major platforms",
      listItem: ["AWS", "Azure", "Google Cloud", "Serverless"],
      link: "#cloud"
    },
    {
      title: "Mobile Applications",
      des: "Cross-platform apps for iOS and Android",
      listItem: ["React Native", "Flutter", "Firebase", "App Store"],
      link: "#mobile"
    },
    // Additional services that will show when "Show More" is clicked
    ...(showMore ? [
      {
        title: "UI/UX Design",
        des: "Beautiful, intuitive interfaces for optimal user experience",
        listItem: ["Figma", "Adobe XD", "User Testing", "Prototyping"],
        link: "#design"
      },
      {
        title: "Website Maintenance",
        des: "Ongoing support and updates for your website",
        listItem: ["Security", "Updates", "Backups", "Monitoring"],
        link: "#maintenance"
      },
      {
        title: "CMS Integration",
        des: "Content management systems for easy updates",
        listItem: ["WordPress", "Drupal", "Custom CMS", "Plugins"],
        link: "#cms"
      },
      {
        title: "API Development",
        des: "Custom APIs and third-party integrations",
        listItem: ["REST API", "GraphQL", "Webhooks", "Documentation"],
        link: "#api"
      }
    ] : [])
  ];

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Our Services
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Professional solutions for your business
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArchiveCard
              title={service.title}
              des={service.des}
              listItem={service.listItem}
              link={""}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;