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
 * The PullUpdate model module.
 * @module model/PullUpdate
 * @version 1.3.3
 */
var PullUpdate =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullUpdate</code>.
   * @alias module:model/PullUpdate
   */
  function PullUpdate() {
    _classCallCheck(this, PullUpdate);

    PullUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullUpdate} obj Optional instance to populate.
     * @return {module:model/PullUpdate} The populated <code>PullUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullUpdate();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
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

  return PullUpdate;
}();
/**
 * @member {String} body
 */


PullUpdate.prototype['body'] = undefined;
/**
 * @member {String} state
 */

PullUpdate.prototype['state'] = undefined;
/**
 * @member {String} title
 */

PullUpdate.prototype['title'] = undefined;
var _default = PullUpdate;
exports["default"] = _default;