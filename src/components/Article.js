import React, { createContext, useContext, Children } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Ta, Col, Row } from "./BasicArticleTable";
import { Pa } from "./Text";

const ArticleContext = createContext();


export function Ref(props) {

    const articleId = useContext(ArticleContext)
    const articles = useSelector((state) => state.articles);
    const thisArticle = articles[articleId];
    const source = thisArticle && thisArticle.sources[props.code]

    if (source) {
        const desc = props.noBrackets ? source.shortDesc : `[${source.shortDesc}]`
        return <Link href={source.href}>
            {desc}
        </Link>
    }

    return <></>
}

export function Sources(props) {
    const articleId = useContext(ArticleContext)

    const sources = Children.toArray(props.children).reduce((acc, src) => {
        return {
            ...acc,
            [src.props.code]: {
                shortDesc: src.props.shortDesc,
                href: src.props.href
            }
        }
    }, {})

    const dispatch = useDispatch();

    dispatch({
        type: "articles/registerSources",
        articleId: articleId,
        sources: sources
    })

    let sourcesTable = <></>
    if (Children.count(props.children) > 0) {
        sourcesTable = <Ta>
            {Children.map(props.children, src => {
                return <Row>
                    <Col>{src.props.shortDesc}</Col>
                    <Col>
                        <Link href={src.props.href}>
                            {src.props.href}
                        </Link>
                    </Col>
                </Row>
            })}
        </Ta>
    } else {
        sourcesTable = <Pa>No sources mentioned.</Pa>
    }

    return <Box sx={{ pb: 4, pt: 4 }} component="section">
        <Typography variant="h5" color="primary" component="h3" sx={{ pb: 4 }}>Sources</Typography>
        {sourcesTable}
    </Box>
}

export function Src(props) { }

export default function Art(props) {
    if (props.artId == undefined) throw "article has no id"

    return <ArticleContext.Provider value={props.artId}>
        <Box sx={{ pb: 4 }} component="article">
            {props.children}
        </Box>
    </ArticleContext.Provider>
}