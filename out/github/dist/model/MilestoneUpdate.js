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
 * The MilestoneUpdate model module.
 * @module model/MilestoneUpdate
 * @version 1.4.3
 */
var MilestoneUpdate =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MilestoneUpdate</code>.
   * @alias module:model/MilestoneUpdate
   */
  function MilestoneUpdate() {
    _classCallCheck(this, MilestoneUpdate);

    MilestoneUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MilestoneUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MilestoneUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MilestoneUpdate} obj Optional instance to populate.
     * @return {module:model/MilestoneUpdate} The populated <code>MilestoneUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MilestoneUpdate();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_on')) {
          obj['due_on'] = _ApiClient["default"].convertToType(data['due_on'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MilestoneUpdate;
}();
/**
 * @member {String} description
 */


MilestoneUpdate.prototype['description'] = undefined;
/**
 * @member {String} due_on
 */

MilestoneUpdate.prototype['due_on'] = undefined;
/**
 * @member {String} state
 */

MilestoneUpdate.prototype['state'] = undefined;
/**
 * @member {String} title
 */

MilestoneUpdate.prototype['title'] = undefined;
var _default = MilestoneUpdate;
exports["default"] = _default;