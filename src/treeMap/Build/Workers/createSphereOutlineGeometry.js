define(["./when-c2e8ef35","./Check-c4f3a3fc","./Math-d30358ed","./Cartesian2-e875d9d2","./Transforms-822b9ae5","./RuntimeError-6122571f","./WebGLConstants-4ae0db90","./ComponentDatatype-5d3f6452","./GeometryAttribute-d4786828","./GeometryAttributes-57608efc","./IndexDatatype-e3260434","./GeometryOffsetAttribute-e6e9672c","./EllipsoidOutlineGeometry-4b474927"],function(n,e,i,s,t,r,o,a,d,l,u,c,m){"use strict";function p(e){var i=n.defaultValue(e.radius,1),t={radii:new s.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}p.packedLength=m.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return m.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var y=new m.EllipsoidOutlineGeometry,G={radius:void 0,radii:new s.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(e,i,t){var r=m.EllipsoidOutlineGeometry.unpack(e,i,y);return G.stackPartitions=r._stackPartitions,G.slicePartitions=r._slicePartitions,G.subdivisions=r._subdivisions,n.defined(t)?(s.Cartesian3.clone(r._radii,G.radii),t._ellipsoidGeometry=new m.EllipsoidOutlineGeometry(G),t):(G.radius=r._radii.x,new p(G))},p.createGeometry=function(e){return m.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=p.unpack(e,i)),p.createGeometry(e)}});
