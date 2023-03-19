import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import * as Icons from '../assets/Icons';
import * as Cp from '../pages/ContentMap'

function StyledTreeItem(props) {
  const {
    routeTo,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  const itemLabel = (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
      <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
      <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
        {labelText}
      </Typography>
    </ Box>
  )

  const item = <TreeItem label={itemLabel}
    {...other}
  />

  if (routeTo) {
    return (
      <Link variant="inherit" underline='none' component={RouterLink} to={routeTo}>
        {item}
      </Link>
    );
  } else {
    return item
  }
}

StyledTreeItem.propTypes = {
  routeTo: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function PageMenu() {

  const { expandedItems } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  const onNodeToggle = (_event, nodeIds) => {
    dispatch(dispatch({ type: 'navigation/updateExpandedNodes', expanded: nodeIds }))
  }

  return (<TreeView
    disableSelection
    expanded={expandedItems}
    onNodeToggle={onNodeToggle}
    defaultCollapseIcon={<ArrowDropDownIcon />}
    defaultExpandIcon={<ArrowRightIcon />}
    defaultEndIcon={<div style={{ width: 24 }} />}
    sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
    {Cp.groups.all.map(group => {
      return <StyledTreeItem
        key={group.ref}
        nodeId={group.ref}
        labelText={group.label}
        labelIcon={group.icon} >
        {
        group.articles().map(art => {
          return <StyledTreeItem
            key={art.ref}
            nodeId={art.ref}
            labelText={art.label}
            labelIcon={art.icon}
            routeTo={art.group().routeTo + art.routeTo} />
        })
        }
      </StyledTreeItem>

    })}
    <StyledTreeItem
      nodeId="about"
      labelText="About"
      labelIcon={Icons.about}
      routeTo="/about" />
    <StyledTreeItem
      nodeId="todo"
      labelText="Todo"
      labelIcon={Icons.todo}
      routeTo="/todo" />
  </TreeView>)
}