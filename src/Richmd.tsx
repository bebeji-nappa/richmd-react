import * as React from "react";
import { richmd } from "richmd";
import "richmd/richmd.css";
import "./types";

export const Richmd: React.VFC<RichmdProps> = ({ text, className = "" }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: richmd(text)}}></div>
  )
}
