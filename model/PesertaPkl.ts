import mongoose, {Schema, models, model} from "mongoose";

export interface IPesertaPkl {
    nama: string;
    nis: string;
    jurusan: string;
    sekolah: string;
    tglPreTest?: Date;
    tglPostTest?: Date;
    tmtPkl?: Date;
    tstPkl?: Date;
    penempatan?: string;
}

const PesertaPklSchema = new Schema<IPesertaPkl>(
      {
    nama: {
      type: String,
      required: true,
      trim: true,
    },
    nis: {
      type: String,
      required: true,
      unique: true, // NIS biasanya unik
    },
    jurusan: {
      type: String,
      required: true,
    },
    sekolah: {
      type: String,
      required: true,
    },

    // Tanggal optional
    tglPreTest: Date,
    tglPostTest: Date,

    tmtPkl: Date,
    tstPkl: Date,

    penempatan: {
      type: String,
      default: "-",
    },
  },
  {
    timestamps: true, // auto bikin createdAt & updatedAt
  }
);

export const PesertaPkl =
  models.PesertaPkl || model("PesertaPkl", PesertaPklSchema);