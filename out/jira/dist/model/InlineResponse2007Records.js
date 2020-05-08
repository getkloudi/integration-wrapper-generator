"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2007AssociatedItems = _interopRequireDefault(require("./InlineResponse2007AssociatedItems"));

var _InlineResponse2007ChangedValues = _interopRequireDefault(require("./InlineResponse2007ChangedValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2007Records model module.
 * @module model/InlineResponse2007Records
 * @version 1.0.0
 */
var InlineResponse2007Records = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007Records</code>.
   * @alias module:model/InlineResponse2007Records
   * @param authorKey {String} 
   * @param category {String} 
   * @param created {String} 
   * @param description {String} 
   * @param eventSource {String} 
   * @param id {Number} 
   * @param remoteAddress {String} 
   * @param summary {String} 
   */
  function InlineResponse2007Records(authorKey, category, created, description, eventSource, id, remoteAddress, summary) {
    _classCallCheck(this, InlineResponse2007Records);

    InlineResponse2007Records.initialize(this, authorKey, category, created, description, eventSource, id, remoteAddress, summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2007Records, null, [{
    key: "initialize",
    value: function initialize(obj, authorKey, category, created, description, eventSource, id, remoteAddress, summary) {
      obj['authorKey'] = authorKey;
      obj['category'] = category;
      obj['created'] = created;
      obj['description'] = description;
      obj['eventSource'] = eventSource;
      obj['id'] = id;
      obj['remoteAddress'] = remoteAddress;
      obj['summary'] = summary;
    }
    /**
     * Constructs a <code>InlineResponse2007Records</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007Records} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007Records} The populated <code>InlineResponse2007Records</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007Records();

        if (data.hasOwnProperty('associatedItems')) {
          obj['associatedItems'] = _ApiClient["default"].convertToType(data['associatedItems'], [_InlineResponse2007AssociatedItems["default"]]);
        }

        if (data.hasOwnProperty('authorKey')) {
          obj['authorKey'] = _ApiClient["default"].convertToType(data['authorKey'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('changedValues')) {
          obj['changedValues'] = _ApiClient["default"].convertToType(data['changedValues'], [_InlineResponse2007ChangedValues["default"]]);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('eventSource')) {
          obj['eventSource'] = _ApiClient["default"].convertToType(data['eventSource'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('objectItem')) {
          obj['objectItem'] = _InlineResponse2007AssociatedItems["default"].constructFromObject(data['objectItem']);
        }

        if (data.hasOwnProperty('remoteAddress')) {
          obj['remoteAddress'] = _ApiClient["default"].convertToType(data['remoteAddress'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2007Records;
}();
/**
 * @member {Array.<module:model/InlineResponse2007AssociatedItems>} associatedItems
 */


InlineResponse2007Records.prototype['associatedItems'] = undefined;
/**
 * @member {String} authorKey
 */

InlineResponse2007Records.prototype['authorKey'] = undefined;
/**
 * @member {String} category
 */

InlineResponse2007Records.prototype['category'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2007ChangedValues>} changedValues
 */

InlineResponse2007Records.prototype['changedValues'] = undefined;
/**
 * @member {String} created
 */

InlineResponse2007Records.prototype['created'] = undefined;
/**
 * @member {String} description
 */

InlineResponse2007Records.prototype['description'] = undefined;
/**
 * @member {String} eventSource
 */

InlineResponse2007Records.prototype['eventSource'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse2007Records.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse2007AssociatedItems} objectItem
 */

InlineResponse2007Records.prototype['objectItem'] = undefined;
/**
 * @member {String} remoteAddress
 */

InlineResponse2007Records.prototype['remoteAddress'] = undefined;
/**
 * @member {String} summary
 */

InlineResponse2007Records.prototype['summary'] = undefined;
var _default = InlineResponse2007Records;
exports["default"] = _default;