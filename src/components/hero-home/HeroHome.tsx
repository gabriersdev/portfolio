"use client";

import React, {useEffect, useState} from "react";
import {Flex, Heading, RevealFx, Text} from "@/once-ui/components";
import {home} from "@/app/resources";
import "./HeroHome.css";

export default function HeroHome() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [_, setLatestRender] = useState<number>();

  useEffect(() => {
    setLatestRender(new Date().getTime());

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setLatestRender(new Date().getTime());
    })
  }, []);

  return (
    <>
      {
        width < 767 && (
          <RevealFx translateY={"2"} fillWidth horizontal={"start"}>
            <Flex style={{background: "rgba(204,156,0,0.13)", padding: "0.5rem 1rem", borderRadius: "500px", border: "1px solid rgba(204,156,0,0.25)", marginBottom: "2rem"}} marginTop={"xl"}>
              <span className={"gradient-text"}>✨ Portfolio</span>
            </Flex>
          </RevealFx>
        )
      }
      <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom={width > 767 ? "m" : "l"} paddingTop={width > 767 ? "xl" : "xs"}>
        <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
          <Heading wrap="balance" variant={width < 767 ? "display-default-xs" : "display-default-l"} style={{fontWeight: 500}}>
            {width < 767 ? home.headlineSmallScreen : home.headlineMediumScreen}
          </Heading>
        </div>
      </RevealFx>
      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom={width > 767 ? "m" : "xl"}>
        <Text wrap="balance" onBackground="info-medium" variant="heading-strong-l">
          {home.subline}
        </Text>
      </RevealFx>
    </>
  )
}
