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
import IconsMap from '../assets/IconsMap';

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

function makeArraysOfItems(menuObject) {
  if (menuObject) {
    return Object.keys(menuObject).map((key) => {
      return {
        ...(menuObject[key]),
        id: key,
        items: makeArraysOfItems(menuObject[key].items)
      }
    }
    ).sort((a, b) => a.sequenceCounter - b.sequenceCounter);
  }
  return []
}

function makeTreeItems (menuItems){
  if (menuItems) {
    return menuItems.map(item =>
      <StyledTreeItem 
        key={item.id}
        nodeId={item.id}
        labelText={item.label}
        labelIcon={IconsMap[item.icon]}
        routeTo={item.routeTo}
        children={makeTreeItems(item.items)} />
    )
  }
  return []
}

export default function PageMenu() {

  const {expandedItems, menuItems} = useSelector((state) => state.navigation);
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
    {makeTreeItems(makeArraysOfItems(menuItems))}
  </TreeView>)
}