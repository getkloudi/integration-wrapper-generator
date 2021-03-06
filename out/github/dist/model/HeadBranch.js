"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HeadBranchObject = _interopRequireDefault(require("./HeadBranchObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HeadBranch model module.
 * @module model/HeadBranch
 * @version 1.4.6
 */
var HeadBranch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HeadBranch</code>.
   * @alias module:model/HeadBranch
   */
  function HeadBranch() {
    _classCallCheck(this, HeadBranch);

    HeadBranch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HeadBranch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HeadBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeadBranch} obj Optional instance to populate.
     * @return {module:model/HeadBranch} The populated <code>HeadBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HeadBranch();

        if (data.hasOwnProperty('object')) {
          obj['object'] = _HeadBranchObject["default"].constructFromObject(data['object']);
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HeadBranch;
}();
/**
 * @member {module:model/HeadBranchObject} object
 */


HeadBranch.prototype['object'] = undefined;
/**
 * @member {String} ref
 */

HeadBranch.prototype['ref'] = undefined;
/**
 * @member {String} url
 */

HeadBranch.prototype['url'] = undefined;
var _default = HeadBranch;
exports["default"] = _default;