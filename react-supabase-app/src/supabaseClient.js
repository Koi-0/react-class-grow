import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://cgswvaqnlitlgzgwrpab.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc3d2YXFubGl0bGd6Z3dycGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MzUzNjcsImV4cCI6MjA1NDMxMTM2N30.RWPKJhzxCz15oY50KCVMglTsm24Ide-w_EzevC5YHZ0";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
