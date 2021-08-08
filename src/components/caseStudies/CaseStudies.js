import { useEffect, useState } from "react";
import CaseList from "../caseList/CaseList";
import "./casestudies.scss";
import {
    techCases,
    marketingCases,
} from "../../data";

function CaseStudies() {
    const [selected, setSelected] = useState("tech");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "tech",
        title: "Software",
        },
        {
        id: "mkt",
        title: "Marketing",
        },
    ];

    useEffect(() => {
        switch (selected) {
        case "tech":
            setData(techCases);
            break;
        case "mkt":
            setData(marketingCases);
            break;
        default:
            setData(techCases);
        }
    }, [selected]);

    return (
        <div className="casestudies" id="casestudies">
            <h1>Case Studies</h1>
            <ul>
                {list.map((item, index) => (
                <CaseList
                    key={index}
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                />
                ))}
            </ul>
            <div className="casestudies__container container">
                {data.map((d, index) => (
                <div className="item" key={index}>
                    <img src={d.img} alt={'Image' + d.title} />
                    <div className="item__body">
                        <h3>{d.title}</h3>
                        <p>{d.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default CaseStudies;
