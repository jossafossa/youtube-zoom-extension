import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { storage } from '#imports';
import { useEffect } from "react";
import { DEFAULT_SETTINGS } from "@/assets/getSettings";

const settingsSchema = z.object({
  SENSITIVITY: z.number().min(0.01).max(1),
  MAX_ZOOM: z.number().min(1).max(10),
  MIN_ZOOM: z.number().min(0.1).max(1),
  MODIFIER_KEY: z.enum(["shiftKey", "altKey", "ctrlKey", "metaKey"]),
});

type Settings = z.infer<typeof settingsSchema>;


export default function Popup() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Settings>({
    resolver: zodResolver(settingsSchema),
    defaultValues: DEFAULT_SETTINGS,
  });

  useEffect(() => {
    storage.getItem<Settings>("local:settings").then((saved) => {
      if (saved) {
        Object.entries(saved).forEach(([key, value]) => {
          setValue(key as keyof Settings, value);
        });
      }
    });
  }, [setValue]);

  const onSubmit = async (data: Settings) => {
    await storage.setItem("local:settings", data);
    alert("Settings saved!");
  };

  return (
    <div>
      <h3>Zoom Settings</h3>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Sensitivity (0.01 - 1.0)</label>
          <input type="number" step="0.01" max={1} min={0.01} {...register("SENSITIVITY", { valueAsNumber: true })} />
          {errors.SENSITIVITY && <span>{errors.SENSITIVITY.message}</span>}
        </div>

        <div>
          <label>Max Zoom</label>
          <input type="number" min={1} max={10} {...register("MAX_ZOOM", { valueAsNumber: true })} />
          {errors.MAX_ZOOM && <span>{errors.MAX_ZOOM.message}</span>}
        </div>

        <div>
          <label>Min Zoom</label>
          <input type="number" step="0.01" min={0.1} max={1} {...register("MIN_ZOOM", { valueAsNumber: true })} />
          {errors.MIN_ZOOM && <span>{errors.MIN_ZOOM.message}</span>}
        </div>

        <div>
          <label>Modifier Key</label>
          <select {...register("MODIFIER_KEY")} >
            <option value="shiftKey">Shift</option>
            <option value="altKey">Alt</option>
            <option value="ctrlKey">Control</option>
            <option value="metaKey">Command/Windows</option>
          </select>
        </div>

        <button type="submit" >
          Save
        </button>
      </form>
    </div>
  );
}