"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PatchGistFiles = _interopRequireDefault(require("./PatchGistFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchGist model module.
 * @module model/PatchGist
 * @version 1.4.6
 */
var PatchGist = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchGist</code>.
   * @alias module:model/PatchGist
   */
  function PatchGist() {
    _classCallCheck(this, PatchGist);

    PatchGist.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchGist, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGist} obj Optional instance to populate.
     * @return {module:model/PatchGist} The populated <code>PatchGist</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchGist();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _PatchGistFiles["default"].constructFromObject(data['files']);
        }
      }

      return obj;
    }
  }]);

  return PatchGist;
}();
/**
 * @member {String} description
 */


PatchGist.prototype['description'] = undefined;
/**
 * @member {module:model/PatchGistFiles} files
 */

PatchGist.prototype['files'] = undefined;
var _default = PatchGist;
exports["default"] = _default;