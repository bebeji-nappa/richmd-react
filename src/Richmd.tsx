import * as React from "react";
import { richmd } from "richmd";
import "richmd/richmd.css";
import "./types";

export const Richmd: React.VFC<RichmdProps> = ({ text, id = "", className = "" }) => {
  return (
    <div id={id} className={className} dangerouslySetInnerHTML={{__html: richmd(text)}}></div>
  )
}
