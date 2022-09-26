import React from "react";
import {createRoot} from "react-dom/client";
import { getData } from "./data";

const hello = <h2>Hello Wolrd</h2>

const root = createRoot(document.getElementById('root'));
root.render(hello);