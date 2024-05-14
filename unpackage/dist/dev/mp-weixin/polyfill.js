"use strict";
if (!Array.prototype.at) {
  Array.prototype.at = function(index) {
    const length = this.length;
    if (index < 0) {
      index = length + index;
    }
    if (index < 0 || index >= length) {
      return void 0;
    }
    return Array.prototype.slice.call(this, index, index + 1)[0];
  };
}
