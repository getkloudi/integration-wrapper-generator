"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemLevelStats = _interopRequireDefault(require("./ItemLevelStats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ItemStats model module.
 * @module model/ItemStats
 * @version 1.1.0
 */
var ItemStats = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemStats</code>.
   * Items statistics per event type and level. Each item in the specified version has 4 possible event types:   - &#x60;new&#x60; for new items in the code version   - &#x60;repeated&#x60; for an item that already existed in preivous versions   - &#x60;reactivated&#x60; an item that was resolved but was reactivated in the code version   - &#x60;resolved&#x60; an item resolved in one specific version  For each of them we collect the number of items for each possible level: &#x60;debug&#x60;, &#x60;info&#x60;, &#x60;warning&#x60;, &#x60;error&#x60; or &#x60;critical&#x60;.
   * @alias module:model/ItemStats
   */
  function ItemStats() {
    _classCallCheck(this, ItemStats);

    ItemStats.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemStats, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemStats} obj Optional instance to populate.
     * @return {module:model/ItemStats} The populated <code>ItemStats</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemStats();

        if (data.hasOwnProperty('new')) {
          obj['new'] = _ItemLevelStats["default"].constructFromObject(data['new']);
        }

        if (data.hasOwnProperty('repeated')) {
          obj['repeated'] = _ItemLevelStats["default"].constructFromObject(data['repeated']);
        }

        if (data.hasOwnProperty('reactivated')) {
          obj['reactivated'] = _ItemLevelStats["default"].constructFromObject(data['reactivated']);
        }

        if (data.hasOwnProperty('resolved')) {
          obj['resolved'] = _ItemLevelStats["default"].constructFromObject(data['resolved']);
        }
      }

      return obj;
    }
  }]);

  return ItemStats;
}();
/**
 * @member {module:model/ItemLevelStats} new
 */


ItemStats.prototype['new'] = undefined;
/**
 * @member {module:model/ItemLevelStats} repeated
 */

ItemStats.prototype['repeated'] = undefined;
/**
 * @member {module:model/ItemLevelStats} reactivated
 */

ItemStats.prototype['reactivated'] = undefined;
/**
 * @member {module:model/ItemLevelStats} resolved
 */

ItemStats.prototype['resolved'] = undefined;
var _default = ItemStats;
exports["default"] = _default;