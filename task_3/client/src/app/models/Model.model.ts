import {Deserializable} from "./deserializable.model";

export class Model implements Deserializable {
	_id: string;
	name: string;
	place: string;

	deserialize(input: any){
		Object.assign(<any>this, input);
		return this;
	}
}