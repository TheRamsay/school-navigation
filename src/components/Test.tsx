import React, {useEffect} from "react";
import * as d3 from "d3";

const Test = () => {

    useEffect(() => {
        const zoom = d3.zoom()
            .on('zoom', handleZoom);

        // @ts-ignore
        function handleZoom(e) {
            d3.select('svg rect')
                .attr('transform', e.transform);
        }

        // @ts-ignore
        d3.select('svg').call(zoom);
    }, [])

    return (
        <div>
            <div><input type={"text"}/></div>
            <svg width="400" height="110" style={{background: "grey"}}>
                <rect width="300" height="100" style={{fill: "red", background: "blue"}}/>
            </svg>
        </div>
    )

}

export default Test;
