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
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.0.0
 */
var Milestone =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Milestone</code>.
   * Update an existing project milestone
   * @alias module:model/Milestone
   */
  function Milestone() {
    _classCallCheck(this, Milestone);

    Milestone.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Milestone, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Milestone} obj Optional instance to populate.
     * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Milestone();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_date')) {
          obj['due_date'] = _ApiClient["default"].convertToType(data['due_date'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('iid')) {
          obj['iid'] = _ApiClient["default"].convertToType(data['iid'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Milestone;
}();
/**
 * @member {String} created_at
 */


Milestone.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Milestone.prototype['description'] = undefined;
/**
 * @member {String} due_date
 */

Milestone.prototype['due_date'] = undefined;
/**
 * @member {String} id
 */

Milestone.prototype['id'] = undefined;
/**
 * @member {String} iid
 */

Milestone.prototype['iid'] = undefined;
/**
 * @member {String} project_id
 */

Milestone.prototype['project_id'] = undefined;
/**
 * @member {String} start_date
 */

Milestone.prototype['start_date'] = undefined;
/**
 * @member {String} state
 */

Milestone.prototype['state'] = undefined;
/**
 * @member {String} title
 */

Milestone.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

Milestone.prototype['updated_at'] = undefined;
var _default = Milestone;
exports["default"] = _default;