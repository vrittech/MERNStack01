import mongoose from "mongoose";

export interface IMember {
  name: string;
  surname: string;
  _id? : string;
}

export const MemberSchema = new mongoose.Schema<IMember>({
  name: {
    type: String,
    required: [true, "Member name is required"],
  },
  surname: {
    type: String,
    required: [true, "Member surname is required"],
  },
});

 const MemberModel = mongoose.model<IMember>("member", MemberSchema);

 export default MemberModel;