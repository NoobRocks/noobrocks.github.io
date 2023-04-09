import React from "react";
import _clamp from "lodash/clamp";

import styles from "./styles.js";

class ListView extends React.PureComponent {
  onClick = (...args) => {
    this.props.onClick && this.props.onClick(...args);
  };

  makeItemVisible = (scrollAlways = true) => {
    if (!this.listView || this.innerListView.scrollWidth <= this.listView.offsetWidth) {
      return;
    }
    const {itemList, itemId, itemIdProperty, listViewMargin} = this.props;
    if (!itemId) {
      return;
    }
    const itemIndex = itemList.findIndex(item => item[itemIdProperty] === itemId);
    if (itemIndex === -1) {
      return;
    }
    const containerRect = this.listView.getBoundingClientRect();
    const itemRect = this.innerListView.children[itemIndex + 1].getBoundingClientRect();
    if (!scrollAlways && itemRect.left >= containerRect.left && itemRect.right <= containerRect.right) {
      return;
    }
    const translateX = Math.floor((containerRect.width - itemRect.width) / 2) - (listViewMargin || 0) - itemRect.width * itemIndex;
    this.innerListView.style.transform = `translateX(${_clamp(translateX, -this.innerListView.scrollWidth + this.listView.offsetWidth, 0)}px)`;
  };

  componentDidMount() {
    this.makeItemVisible();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemList !== this.props.itemList ||
        prevProps.itemId !== this.props.itemId ||
        prevProps.listViewMargin !== this.props.listViewMargin) {
      this.makeItemVisible();
    }
  }

  render() {
    const {itemList, itemId, renderer, itemIdProperty, listViewStyle, innerListViewStyle, listViewMargin = 0} = this.props;
    return (
      <div style={{...styles.listView, ...listViewStyle}} ref={r => this.listView = r}>
        <div style={{...styles.innerListView, ...innerListViewStyle}} ref={r => this.innerListView = r}>
          <div style={{...styles.innerListViewMargin, width: listViewMargin + "px"}}/>
          {itemList.map((item, i) => {
            const isSelected = item[itemIdProperty] === itemId;
            return renderer(item, {isLast: i === itemList.length - 1, isSelected, index: i}, this.onClick);
          })}
          <div style={{...styles.innerListViewMargin, width: listViewMargin + "px"}}/>
        </div>
      </div>
    );
  }
}

export default ListView;
