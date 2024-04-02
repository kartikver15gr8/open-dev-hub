import React from "react";
import { CardSpotlight } from "../CardSpotlight";
import { Badge } from "../ui/badge";
import { CiMedicalClipboard } from "react-icons/ci";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";
import Link from "next/link";
import {
  GitIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Icon/Icon";
import NextImage from "../NextImage";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Share2 } from "lucide-react";

const ProjectCard = ({ data }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text) => {
    copy(text);
    toast("Copied : " + copiedText, {
      type: "success",
    });
  };
  return (
    <div className="flex animate_in  flex-col gap-4">
      {data.map((el) => (
        <CardSpotlight className={"lg:w-4/6 w-full"} key={el?._id} hoverEffect>
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4 ">
              <NextImage
                src={el?.user?.image}
                alt="avatar"
                height={30}
                width={30}
                className="rounded-full"
              />
              <p>{el?.user?.name}</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Link href={el?.repoLink}>
                <GitIcon />
              </Link>
              <Link href={el?.projectLink}>
                <Badge>Visit</Badge>
              </Link>
            </div>
          </div>

          <p className="text-lg font-bold text-gradient">{el?.title}</p>
          <p className="text-gray-200">{el?.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 ">
              {el?.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
            <Drawer>
              <DrawerTrigger asChild>
                <Share2
                  color="gray"
                  className="cursor-pointer"
                  size={20}
                  absoluteStrokeWidth
                />
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader className={"mt-4"}>
                    <DrawerTitle>
                      Share this project with your friends
                    </DrawerTitle>
                    <DrawerDescription className="flex flex-col gap-8 mt-4">
                      <div className="flex justify-between items-center">
                        <LinkedInIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <GmailIcon />
                      </div>
                      <div className="flex justify-between items-center">
                        <input
                          className="outline-none bg-transparent border border-border px-4 py-1 rounded-lg"
                          defaultValue={el?.repoLink}
                        />
                        <Button
                          onClick={() => handleCopy(el?.repoLink)}
                          size="sm"
                        >
                          Copy
                        </Button>
                      </div>
                      {/* <div>
                        <DrawerFooter>
                          <DrawerClose>
                            <Button>Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div> */}
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </CardSpotlight>
      ))}

      {data.length === 0 && (
        <div className="flex justify-center items-center h-[40vh]">
          <p className="text-gradient">No Projects Found</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
