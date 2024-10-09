import { Paciente } from "../model/Paciente";

export default function DetectorService() {
  // const HOST = "192.168.0.14";
  const HOST = "3.131.85.72";
  const detect = async (fileUri: any, paciente: Paciente | null) => {
    if (fileUri && paciente) {
      const formData = new FormData();
      const fileName = paciente.nombre.replace(/\s+/g, "");
      (formData as any).append("file", {
        uri: fileUri,
        name: fileName,
        type: "audio/m4a",
      });
      formData.append("paciente", JSON.stringify(paciente));
      try {
        const response = await fetch(
          `http://ec2-3-131-85-72.us-east-2.compute.amazonaws.com:8000/api/upload/audio`,
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const data = await response.json();
        const status = response.status
        return {data, status}
      } catch (err) {
        console.error(err);
        return { status: 500 };
      }
    }
  };

  return { detect };
}
