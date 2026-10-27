import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppLink, calculateBMI, getGymStatus } from './gymLogic.ts';

test('buildWhatsAppLink sanitizes phone number and encodes message', () => {
  const url = buildWhatsAppLink('+55 (55) 99915-6558', 'Olá Supreme!');
  assert.equal(url, 'https://wa.me/5555999156558?text=Ol%C3%A1%20Supreme!');
});

test('calculateBMI calculates exact BMI and categorizes correctly', () => {
  // 70kg, 175cm -> 70 / (1.75^2) = 22.86 -> 22.9
  const resNormal = calculateBMI(70, 175);
  assert.notEqual(resNormal, null);
  assert.equal(resNormal?.bmi, 22.9);
  assert.equal(resNormal?.category, 'Peso ideal');

  // 95kg, 175cm -> 31.02 -> Obesidade
  const resObese = calculateBMI(95, 175);
  assert.equal(resObese?.category, 'Obesidade');

  // Invalid values return null
  assert.equal(calculateBMI(10, 175), null);
  assert.equal(calculateBMI(70, 50), null);
});

test('getGymStatus returns proper structure with valid todayLabel and hours', () => {
  const status = getGymStatus(new Date('2026-10-27T10:00:00Z'));
  assert.ok(status.todayLabel.length > 0);
  assert.ok(status.hoursToday.length > 0);
  assert.ok(typeof status.isOpen === 'boolean');
  assert.ok(status.nextStatusMessage.length > 0);
});
