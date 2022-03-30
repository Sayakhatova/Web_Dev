def cigar_party(cigars, is_weekend):
  if cigars in range(40, 61) or (is_weekend and cigars >= 40): return True
  return False
