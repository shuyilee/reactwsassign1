import React from "react";
import ReactDOM from "react-dom";
import { ListingItem } from "./listing.jsx";
import { MarketPlace } from "./listing.jsx";

ReactDOM.render(<div>
    <MarketPlace />
    <ListingItem />
</div>,
    document.querySelector('#root')
);

/* <Grid /> */


/* import { ListingItem } from "./listing.jsx";

const el = < ListingItem / >

    ReactDOM.render(el, document.querySelector("#root"));*/