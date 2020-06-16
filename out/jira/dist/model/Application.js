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
 * The Application model module.
 * @module model/Application
 * @version 1.4.0
 */
var Application = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Application</code>.
   * The application the linked item is in.
   * @alias module:model/Application
   */
  function Application() {
    _classCallCheck(this, Application);

    Application.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Application, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Application();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Application;
}();
/**
 * The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link's icon. The tooltip takes the format \"\\[application name\\] icon title\". Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as \"Web Link\". Grouping and sorting of links may place links without an application name last.
 * @member {String} name
 */


Application.prototype['name'] = undefined;
/**
 * The name-spaced type of the application, used by registered rendering apps.
 * @member {String} type
 */

Application.prototype['type'] = undefined;
var _default = Application;
exports["default"] = _default;