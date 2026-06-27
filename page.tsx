'use client';

import { useState, useCallback } from 'react';

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '@#$%<>!^&*()_+-=[]{}|;:,./~`';

function generatePassword(
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string {
  let charset = '';
  const guaranteed: string[] = [];

  if (useUpper) { charset += UPPERCASE; guaranteed.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]); }
  if (useLower) { charset += LOWERCASE; guaranteed.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]); }
  if (useNumbers) { charset += NUMBERS; guaranteed.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]); }
  if (useSymbols) { charset += SYMBOLS; guaranteed.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]); }

  if (!charset) return '';

  const remaining = Array.from(
    { length: Math.max(0, length - guaranteed.length) },
    () => charset[Math.floor(Math.random() * charset.length)]
  );

  const combined = [...guaranteed, ...remaining];
  for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }

  return combined.join('');
}

export default function Home() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(() => {
    const pwd = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
    setPassword(pwd);
    setCopied(false);
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  const handleCopy = useCallback(async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = password;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [password]);

  return (
    <div className="page-wrapper">
      <h1 className="app-title">✦ Divaa&apos;s Vault ✦</h1>
      <p className="app-subtitle">Red Wine Edition 🍷</p>

      <div className="card">
        <div>
          <p className="section-label">Password Length</p>
          <div className="slider-row">
            <input
              type="range"
              className="slider"
              min={1}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <div className="length-badge">{length}</div>
          </div>
        </div>

        <div className="divider" />

        <div>
          <p className="section-label">Character Types</p>
          <div className="checkboxes-grid">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useUpper}
                onChange={(e) => setUseUpper(e.target.checked)}
              />
              A-Z Uppercase
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useLower}
                onChange={(e) => setUseLower(e.target.checked)}
              />
              a-z Lowercase
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
              />
              0-9 Numbers
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
              />
              @#$% Symbols
            </label>
          </div>
        </div>

        <div className="divider" />

        <button className="generate-btn" onClick={handleGenerate}>
          Generate 👩🏻‍💻
        </button>

        {password && (
          <div className="output-area">
            <p className="section-label">Generated Password</p>
            <div className="password-display">{password}</div>
            <button
              className={`copy-btn${copied ? ' copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
            </button>
          </div>
        )}

        {!password && (
          <div className="output-area">
            <p className="section-label">Generated Password</p>
            <div className="password-display">
              <span className="password-placeholder">Click Generate to create a password…</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
