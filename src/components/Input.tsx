import { FunctionComponent, memo } from 'react';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default memo(Input);
