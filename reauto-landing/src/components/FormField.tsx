import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'search' | 'textarea' | 'select';
  options?: { label: string; value: string }[];
  rows?: number;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const fieldClassName =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-body text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:bg-white';

export default function FormField({
  label,
  type = 'text',
  options,
  rows,
  textareaProps,
  ...props
}: FormFieldProps) {
  const textareaFieldProps = props as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>;
  const selectFieldProps = props as unknown as SelectHTMLAttributes<HTMLSelectElement>;

  if (type === 'textarea') {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-headline text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
          {label}
        </label>
        <textarea rows={rows} className={fieldClassName} {...textareaFieldProps} {...textareaProps} />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-headline text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
          {label}
        </label>
        <select className={`${fieldClassName} h-12 appearance-none`} {...selectFieldProps}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-headline text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
        {label}
      </label>
      <input type={type} className={`${fieldClassName} h-12`} {...props} />
    </div>
  );
}
