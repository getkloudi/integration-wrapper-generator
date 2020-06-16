"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ComponentIssuesCount model module.
 * @module model/ComponentIssuesCount
 * @version 1.4.0
 */
var ComponentIssuesCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ComponentIssuesCount</code>.
   * Count of issues assigned to a component.
   * @alias module:model/ComponentIssuesCount
   */
  function ComponentIssuesCount() {
    _classCallCheck(this, ComponentIssuesCount);

    ComponentIssuesCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ComponentIssuesCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ComponentIssuesCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentIssuesCount} obj Optional instance to populate.
     * @return {module:model/ComponentIssuesCount} The populated <code>ComponentIssuesCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ComponentIssuesCount();

        if (data.hasOwnProperty('issueCount')) {
          obj['issueCount'] = _ApiClient["default"].convertToType(data['issueCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ComponentIssuesCount;
}();
/**
 * The count of issues assigned to a component.
 * @member {Number} issueCount
 */


ComponentIssuesCount.prototype['issueCount'] = undefined;
/**
 * The URL for this count of issues for a component.
 * @member {String} self
 */

ComponentIssuesCount.prototype['self'] = undefined;
var _default = ComponentIssuesCount;
exports["default"] = _default;