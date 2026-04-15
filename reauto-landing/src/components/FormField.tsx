import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'search' | 'textarea' | 'select';
  options?: { label: string; value: string }[];
  rows?: number;
  textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function FormField({ 
  label, 
  type = 'text', 
  options, 
  rows,
  textareaProps,
  ...props 
}: FormFieldProps) {
  const isTextarea = type === 'textarea';
  const isSelect = type === 'select';

  return (
    <div className="flex flex-col gap-2">
      <label className="font-headline text-xs font-bold text-on-surface uppercase tracking-wider">
        {label}
      </label>

      {isTextarea && (
        <textarea
          rows={rows}
          className="bg-surface-container-lowest border-none rounded focus:ring-2 focus:ring-primary p-4 font-body text-on-surface"
          {...(props as any)}
          {...textareaProps}
        />
      )}

      {isSelect && (
        <select
          className="bg-surface-container-lowest border-none rounded focus:ring-2 focus:ring-primary h-12 px-4 font-body text-on-surface"
          {...(props as any)}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {!isTextarea && !isSelect && (
        <input
          type={type}
          className="bg-surface-container-lowest border-none rounded focus:ring-2 focus:ring-primary h-12 px-4 font-body text-on-surface"
          {...(props as any)}
        />
      )}
    </div>
  );
}
