"use strict";

var model = require("../ec2-2016-11-15.min");

var util = require("./util");

var xml2js = require("xml2js"); // options passed to xml2js parser


var options = {
  explicitCharkey: false,
  // undocumented
  trim: false,
  // trim the leading/trailing whitespace from text nodes
  normalize: false,
  // trim interior whitespace inside text nodes
  explicitRoot: false,
  // return the root node in the resulting object?
  emptyTag: null,
  // the default value for empty nodes
  explicitArray: true,
  // always put child nodes in an array
  ignoreAttrs: false,
  // ignore attributes, only create text nodes
  mergeAttrs: false,
  // merge attributes and child elements
  validator: null // a callable validator

};
var parser = xml2js.Parser(options);

parseXml = function parseXml(xml, shape) {
  switch (shape.type) {
    case "structure":
      return parseStructure(xml, shape);

    case "map":
      return parseMap(xml, shape);

    case "list":
      return parseList(xml, shape);

    case undefined:
    case null:
      return parseUnknown(xml);

    default:
      return parseScalar(xml, shape);
  }
};

parseStructure = function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;
  util.each(shape.members, function (memberName, memberShape) {
    var xmlName = memberShape.locationName;

    if (Object.prototype.hasOwnProperty.call(xml, xmlName) && Array.isArray(xml[xmlName])) {
      var xmlChild = xml[xmlName];
      if (!memberShape.flattened) xmlChild = xmlChild[0];
      data[memberName] = parseXml(xmlChild, memberShape);
    } else if (memberShape.isXmlAttribute && xml.$ && Object.prototype.hasOwnProperty.call(xml.$, xmlName)) {
      data[memberName] = parseScalar(xml.$[xmlName], memberShape);
    } else if (memberShape.type === "list") {
      data[memberName] = memberShape.defaultValue;
    }
  });
  return data;
};

parseMap = function parseMap(xml, shape) {
  var data = {};
  if (xml === null) return data;
  var xmlKey = shape.key.locationName || "key";
  var xmlValue = shape.value.locationName || "value";
  var iterable = shape.flattened ? xml : xml.entry;

  if (Array.isArray(iterable)) {
    util.arrayEach(iterable, function (child) {
      data[child[xmlKey][0]] = parseXml(child[xmlValue][0], shape.value);
    });
  }

  return data;
};

parseList = function parseList(xml, shape) {
  var data = [];
  var name = shape.member.locationName || "member";

  if (shape.flattened) {
    util.arrayEach(xml, function (xmlChild) {
      data.push(parseXml(xmlChild, shape.member));
    });
  } else if (xml && Array.isArray(xml[name])) {
    util.arrayEach(xml[name], function (child) {
      data.push(parseXml(child, shape.member));
    });
  }

  return data;
};

parseUnknown = function parseUnknown(xml) {
  if (xml === undefined || xml === null) return "";
  if (typeof xml === "string") return xml; // parse a list

  if (Array.isArray(xml)) {
    var arr = [];

    for (i = 0; i < xml.length; i++) {
      arr.push(parseXml(xml[i], {}));
    }

    return arr;
  } // empty object


  var keys = Object.keys(xml),
      i;

  if (keys.length === 0 || keys === ["$"]) {
    return {};
  } // object, parse as structure


  var data = {};

  for (i = 0; i < keys.length; i++) {
    var key = keys[i],
        value = xml[key];
    if (key === "$") continue;

    if (value.length > 1) {
      // this member is a list
      data[key] = parseList(value, {
        member: {}
      });
    } else {
      // this member is a single item
      data[key] = parseXml(value[0], {});
    }
  }

  return data;
};

parseScalar = function parseScalar(shape) {
  if (text && text.$ && text.$.encoding === "base64") {
    shape = new Shape.create({
      type: text.$.encoding
    });
  }

  if (text && text._) text = text._;

  if (typeof shape.toType === "function") {
    return shape.toType(text);
  } else {
    return text;
  }
};

module.exports.toJson = function (action, xml) {
  var data, error;
  parser.parseString(xml, function (err, json) {
    error = err;
    data = json;
  });

  if (data) {
    var data = parseXml(data, model.operations[action].output);

    if (data.ResponseMetadata) {
      data.ResponseMetadata = parseXml(result.ResponseMetadata[0], {});
    }

    return data;
  } else if (error) {
    throw util.error(error, {
      code: "XMLParserError",
      retryable: true
    });
  } else {
    // empty xml document
    return parseXml({}, shape);
  }
};